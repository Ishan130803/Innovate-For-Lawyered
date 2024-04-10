import getUserTable from "@/lib/helpers/getUserTable";
import { Collection } from "mongodb";
import { Document } from "mongodb";

// Get all the chats associated witha particular user id and convid
export async function GET(
  req: Request,
  { params }: { params: { userid: string; convid: string } }
) {
  const userCollection = (await getUserTable()) as Collection<Document>;

  const convs = await userCollection?.findOne({
    userId: params.userid,
    "conversations.convid": params.convid,
  });
  if (!convs) {
    return new Response("No such conversation found", { status: 404 });
  }
  return Response.json({ result: convs.chats });
}

// POST method used to add empty Chats
export async function POST(
  req: Request,
  { params }: { params: { userid: string; convid: string } }
) {
  const userCollection = (await getUserTable()) as Collection<Document>;

  const convs = await userCollection?.findOne({
    userId: params.userid,
    "conversations.convid": params.convid,
  });
  if (!convs) {
    return new Response("No such conversation found", { status: 404 });
  }

  userCollection.updateOne(
    {
      userId: params.userid,
      "conversations.convid": params.convid,
    },
    { $set: { chats: [] } }
  );

  return new Response(`Created Empty Chats for the user`, { status: 200 });
}

//PUT will be used to add the chats
export async function PUT(
  req: Request,
  { params }: { params: { userid: string; convid: string } }
) {
  const userCollection = (await getUserTable()) as Collection<Document>;

  const convs = await userCollection?.findOne({
    userId: params.userid,
    "conversations.convid": params.convid,
  });
  if (!convs) {
    return new Response("No such conversation found", { status: 404 });
  }
  const data: Array<Object> = await req.json();
  if (data) {
    userCollection.updateOne(
      {
        userId: params.userid,
        "conversations.convid": params.convid,
      },
      { $push: { "conversations.chats": { $each: data } } }
    );
  }
  return new Response("Converations Updated Successfully", { status: 200 });
}

// Deleted item will be provided in an array of object
export async function DELETE(
  req: Request,
  { params }: { params: { userid: string; convid: string } }
) {
  const userCollection = (await getUserTable()) as Collection<Document>;

  const convs = await userCollection?.findOne({
    userId: params.userid,
    "conversations.convid": params.convid,
  });
  if (!convs) {
    return new Response("No such conversation found", { status: 404 });
  }
  const data: Array<Object> = await req.json();
  for (let item of data) {
    await userCollection.updateOne(
      { userId: params.userid },
      { $pull: { "conversations.chats": { chatid: item.chatid } } } // Add taskData to tasks array
    );
  }
  return new Response("Deleted Data Successfully", { status: 200 });
  // return new Response("Fatal Error occured while getting user data", {
  //   status: 500,
  // });
}
