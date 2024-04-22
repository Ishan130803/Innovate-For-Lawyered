import { getServerSession } from "next-auth";
import clientPromise from "../mongodb";
import { ObjectId } from "mongodb";
import { conversationSchema } from "@/types/chatSchema";

export async function getUserConversations(query: any) {
  const userid = (await getServerSession())?.user.id;
  const { convid } = query as conversationSchema;
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
