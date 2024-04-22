import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { Document, ObjectId } from "mongodb";
import { v4 as uuid } from "uuid";
import { chatSchema } from "@/types/chatSchema";

export const dynamic = "force-dynamic";

type Params = {
  userid: string;
};
async function getUserId() {
  const session = await getServerSession();
  const userid = session?.user.id;
  return userid;
}

interface routeParams {
  params: {
    userid: string;
    convid: string;
  };
}

export async function GET(req: NextRequest, context: routeParams) {
  const userid = context.params.userid;
  const convid = context.params.convid;

  try {
    const client = await clientPromise; // Wait for the database connection
    const db = client.db("LegaleaseAPP");
    const conversationCollection =
      db.collection("userConversations") ??
      (await db.createCollection("userConversations"));
    const taskCollection =
      db.collection("userChats") ?? (await db.createCollection("userChats"));

    const conversation = await conversationCollection.findOne({
      userId: userid,
      convid: convid,
    });

    if (!conversation) {
      return new Response("No Such conversation or user", { status: 404 });
    }

    const chats = await taskCollection
      .find({ userId: userid, convid: convid })
      .toArray();

    return Response.json([...chats]);
  } catch (error) {
    console.error(error);
    return new Response(
      "Fatal Error occured while getting user conversations",
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req: NextRequest, context: routeParams) {
  const uid = context.params.userid;
  const cid = context.params.convid;

  try {
    const client = await clientPromise; // Wait for the database connection
    const db = client.db("LegaleaseAPP");
    const conversationCollection =
      db.collection("userConversations") ??
      (await db.createCollection("userConversations"));
    const taskCollection =
      db.collection("userChats") ?? (await db.createCollection("userChats"));

    // const user = await userCollection.findOne({ userId: new ObjectId(uid) });
    // if (!user) {
    //   return new Response("No Such User", { status: 404 });
    // }
    const conversation = await conversationCollection.findOne({
      userId: uid,
      convid: cid,
    });

    if (!conversation) {
      return new Response("No Such conversation or user", { status: 404 });
    }
    const updatedData: Array<Document> = await req.json();

    if (updatedData.length === 0) {
      return NextResponse.json(
        { message: "No Data to Update" },
        { status: 201 }
      );
    }

    const bulkOps = updatedData.map(
      //@ts-ignore
      ({ convid, userId, chatid, _id, ...restOfData }) => ({
        updateOne: {
          filter: { convid: cid, userId: uid, chatid: chatid },
          update: { $set: restOfData },
        },
      })
    );

    const res = await taskCollection.bulkWrite(bulkOps, { ordered: true });
    return NextResponse.json(
      { message: "Updated conversations Successfully", json: res },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return new Response(
      `Fatal Error occured while updating user tasks ${error.message}`,
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest, context: routeParams) {
  const userid = context.params.userid;
  const convid = context.params.convid;

  try {
    const client = await clientPromise; // Wait for the database connection
    const db = client.db("LegaleaseAPP");
    const conversationCollection =
      db.collection("userConversations") ??
      (await db.createCollection("userConversations"));
    const taskCollection =
      db.collection("userChats") ?? (await db.createCollection("userChats"));

    // const user = await userCollection.findOne({ userId: new ObjectId(userid) });
    // if (!user) {
    //   return new Response("No Such User", { status: 404 });
    // }
    const conversation = await conversationCollection.findOne({
      userId: userid,
      convid: convid,
    });

    if (!conversation) {
      return new Response("No Such conversation or user", { status: 404 });
    }
    const data: Document = await req.json() as chatSchema;

    const chatid = uuid();

    const dataWithUserIdconvid = {
      ...data,
      userId: userid,
      convid: convid,
      chatid: chatid,

    };

    const res = await taskCollection.insertOne(dataWithUserIdconvid);

    return NextResponse.json(
      { message: "Inserted tasks Successfully", data: dataWithUserIdconvid,serverResponse : res },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response("Fatal Error occured while inserting user tasks", {
      status: 500,
    });
    // res.status(500).json({ error: 'Error fetching data from MongoDB' });
  }
}

export async function DELETE(req: NextRequest, context: routeParams) {
  const userid = context.params.userid;
  const convid = context.params.convid;
  const chatid = req.nextUrl.searchParams.get("chatid");

  try {
    const client = await clientPromise; // Wait for the database connection
    const db = client.db("LegaleaseAPP");
    const conversationCollection =
      db.collection("userConversations") ??
      (await db.createCollection("userConversations"));
    const taskCollection =
      db.collection("userChats") ?? (await db.createCollection("userChats"));

    const conversation = await conversationCollection.findOne({
      userId: userid,
      convid: convid,
    });

    if (!conversation) {
      return new Response("No Such conversation or user", { status: 404 });
    }

    const res = await taskCollection.deleteOne({
      userId: userid,
      convid: convid,
      chatid: chatid,
    });

    return NextResponse.json(
      { message: "Inserted tasks Successfully", res },
      { status: 200 }
    );
  } catch (error) {
    return new Response("Fatal Error occured while deleting user data", {
      status: 500,
    });
    // res.status(500).json({ error: 'Error fetching data from MongoDB' });
  }
}
