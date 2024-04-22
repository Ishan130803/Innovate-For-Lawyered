import axios from "axios";
import clientPromise from "@/lib/mongodb";
import { GridFSBucket, GridFSBucketReadStream } from "mongodb";
import { Readable } from "stream";
import { v4 as uuid } from "uuid";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
  const message = await req.text();
  if (message.trim() !== "") {
    const reqBody = {
      query: message,
      filename: "sample",
    };
    try {
      const res = await fetch("http://34.125.81.196:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      if (res.ok) {
        return new Response("Posted the message", { status: 200 });
      } else {
        throw new Error("Error while connecting to the server");
      }
    } catch (error: any) {
      console.error(error);
      return new Response(error.message, { status: 500 });
    }
  } else {
    return new Response("message is empty", { status: 400 });
  }
}

interface IResponseBody {
  userid: string;
  convid: string;
  chatid: string;
}

export async function PUT(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("LegaleaseAPP");
    const bucket = new GridFSBucket(db);

    const userid = req.nextUrl.searchParams.get('uid')
    const convid = req.nextUrl.searchParams.get('cid')
    const chatid = req.nextUrl.searchParams.get('chid')

    if (!userid || !convid || !chatid) {
      return new Response(
        "Something wrong happened while uploading pdf to database missing userid convid or chatid",
        { status: 500 }
      );
    }

    let url = "https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK";
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const data = Buffer.from(response.data, "binary");
    const stream = new Readable();
    stream.push(data);
    stream.push(null);


    const uploadStream = bucket.openUploadStream(`${uuid()}.pdf`, {
      chunkSizeBytes: 1048576,
      metadata: { userId: userid, convid: convid, chatid: chatid },
    });

    stream.pipe(uploadStream);

    return new Response("Successfully uploaded data", { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const userid = req.nextUrl.searchParams.get('uid')
    const convid = req.nextUrl.searchParams.get('cid')
    const chatid = req.nextUrl.searchParams.get('chid')

    if (!userid || !convid || !chatid) {
      return new Response(
        "Something wrong happened while uploading pdf to database missing userid convid or chatid",
        { status: 500 }
      );
    }

    const client = await clientPromise;
    const db = client.db("LegaleaseAPP");
    const bucket = new GridFSBucket(db);
    const doc = await bucket
      .find({
        "metadata.userId": userid,
        "metadata.convid": convid,
        "metadata.chatid": chatid,
      })
      .toArray();

    const docid = doc[0]._id
    const headers = new Headers();
    const read = bucket.openDownloadStream(docid);
    const readable = GridFSBucketReadStream.toWeb(read);
    headers.append("Content-Type", "application/pdf");
    //@ts-ignore
    return new Response(readable, { headers: headers, status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
