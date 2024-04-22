import clientPromise from "@/lib/mongodb";
import { Document, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
export const dynamic = "force-dynamic";

interface routeParams {
  params: {
    userid: string;
  };
}

export async function GET(req: NextRequest, context: routeParams) {
  const userid = context.params.userid;
  const convid = req.nextUrl.searchParams.get("convid");

  try {
    const client = await clientPromise; // Wait for the database connection
    const db = client.db("LegaleaseAPP");
    const userCollection = db.collection("userAccounts");
    const conversationCollection =
      db.collection("userConversations") ??
      (await db.createCollection("userConversations"));

    const user = await userCollection.findOne({ userId: new ObjectId(userid) });
    if (!user) {
      return new Response("No Such User", { status: 404 });
    }
    let conversations;
    if (!convid) {
      conversations = await conversationCollection
        .find({ userId: userid })
        .toArray();
    } else {
      conversations = await conversationCollection
        .find({ userId: userid, convid: convid })
        .toArray();
    }
    return Response.json([...conversations]);
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
  const userid = context.params.userid;

  try {
    const client = await clientPromise; // Wait for the database connection
    const db = client.db("LegaleaseAPP");
    const userCollection = db.collection("userAccounts");
    const conversationCollection =
      db.collection("userConversations") ??
      (await db.createCollection("userConversations"));

    const user = await userCollection.findOne({ userId: new ObjectId(userid) });
    if (!user) {
      return new Response("No Such User", { status: 404 });
    }

    const updatedData: Array<Document> = await req.json();

    if (updatedData.length === 0) {
      return NextResponse.json(
        { message: "No Data to Update" },
        { status: 201 }
      );
    }

    const bulkOps = updatedData.map(
      ({ convid, userId, _id, ...restOfData }) => ({
        updateOne: {
          filter: { convid: convid, userId: userid },
          update: { $set: restOfData },
        },
      })
    );

    const res = await conversationCollection.bulkWrite(bulkOps, { ordered: true });
    return NextResponse.json(
      { message: "Updated Conversations Successfully", json: res },
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      "Fatal Error occured while updating user Conversations",
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest, context: routeParams) {
  const userid = context.params.userid;

  try {
    const client = await clientPromise; // Wait for the database connection
    const db = client.db("LegaleaseAPP");
    const userCollection = db.collection("userAccounts");
    const conversationCollection =
      db.collection("userConversations") ??
      (await db.createCollection("userConversations"));

    const user = await userCollection.findOne({ userId: new ObjectId(userid) });
    if (!user) {
      return new Response("No Such User", { status: 404 });
    }

    const data: Array<Document> = await req.json();

    const dataWithUserId = data.map((value) => ({
      ...value,
      title:"New Prompt",
      convid: uuidv4(),
      userId: userid,
    }));

    const res = await conversationCollection.insertMany(dataWithUserId);

    return NextResponse.json(
      {
        message: "Inserted data Successfully",
        serverResponse: res,
        data: dataWithUserId,
      },

      { status: 200 }
    );
  } catch (error) {
    return new Response("Fatal Error occured while inserting user projects", {
      status: 500,
    });
    // res.status(500).json({ error: 'Error fetching data from MongoDB' });
  }
}

export async function DELETE(req: NextRequest, context: routeParams) {
  const userid = context.params.userid;
  const convid = req.nextUrl.searchParams.get("convid");

  try {
    const client = await clientPromise; // Wait for the database connection
    const db = client.db("LegaleaseAPP");
    const userCollection = db.collection("userAccounts");
    const conversationCollection =
      db.collection("userConversations") ??
      (await db.createCollection("userConversations"));

    const chatCollection =
      db.collection("userChats") ?? (await db.createCollection("userChats"));

    const user = await userCollection.findOne({ userId: new ObjectId(userid) });
    if (!user) {
      return new Response("No Such User", { status: 404 });
    }

    const conv_res = await conversationCollection.deleteOne({
      userId: userid,
      convid: convid,
    });

    const chat_res = await chatCollection.deleteMany({
      userId: userid,
      convid: convid,
    });

    if (conv_res.deletedCount) {
      return NextResponse.json(
        {
          message: "No such data to delete",
          conv_res: conv_res,
          chat_res: chat_res,
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Deleted data Successfully",
          conv_res: conv_res,
          chat_res: chat_res,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response("Fatal Error occured while deleting user projects", {
      status: 500,
    });
    // res.status(500).json({ error: 'Error fetching data from MongoDB' });
  }
}
