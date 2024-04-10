import getUserTable from "@/lib/helpers/getUserTable";
import { Collection } from "mongodb";
import { Document } from "mongodb";

export async function GET(
  req: Request,
  { params }: { params: { userid: string } }
) {
  const userCollection = (await getUserTable()) as Collection<Document>;

  const user = await userCollection?.findOne({ userId: params.userid });
  if (!user) {
    return new Response("No such user found", { status: 404 });
  }
  return Response.json({ conversations: user.Conversations });
}

// POST method used to add empty conversations
export async function POST(
  req: Request,
  { params }: { params: { userid: string } }
) {
  const userCollection = (await getUserTable()) as Collection<Document>;

  const user = await userCollection?.findOne({ userId: params.userid });
  if (!user) {
    return new Response("No such user found", { status: 404 });
  }

  userCollection.updateOne(
    { userId: params.userid },
    { $set: { conversations: [] } }
  );

  return new Response(`Created Conversations for the user`, { status: 200 });
}

//PUT will be used to add the conversations
export async function PUT(
  req: Request,
  { params }: { params: { userid: string } }
) {
  const userCollection = (await getUserTable()) as Collection<Document>;

  const user = await userCollection?.findOne({ userId: params.userid });
  if (!user) {
    return new Response("No such user found", { status: 404 });
  }
  const data: Array<Object> = await req.json();
  if (data) {
    userCollection.updateOne(
      { userId: params.userid },
      { $push: { conversations: { $each: data } } }
    );
  }
  return new Response("Converations Updated Successfully", { status: 200 });
}

// Deleted item will be provided in an array of object
export async function DELETE(
  req: Request,
  { params }: { params: { userid: string } }
) {
  const userCollection = (await getUserTable()) as Collection<Document>;

  const user = await userCollection?.findOne({ userId: params.userid });
  if (!user) {
    return new Response("No such user found", { status: 404 });
  }
  const data: Array<Object> = await req.json();
  for (let item of data) {
    await userCollection.updateOne(
      { userId: params.userid },
      { $pull: { conversations: { convid: item.convid } } } // Add taskData to tasks array
    );
  }
  return new Response("Deleted Data Successfully", { status: 200 });
  // return new Response("Fatal Error occured while getting user data", {
  //   status: 500,
  // });
}
