import clientPromise from "../mongodb";

export default async function getUserTable() {
  try {
    const client = await clientPromise;
    const db = client.db("LegaleaseAPP");
    const userCollection = db.collection("userAccounts");

    return userCollection;
  } catch (error) {
    console.error("Error in connecting to database");
  }
}
