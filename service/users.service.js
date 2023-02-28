import { client } from "../index.js";

export async function createUser(data) {
  return await client.db("B42WD").collection("users").insertOne(data);
}

export async function userfromDB(username) {
  return await client
    .db("B42WD")
    .collection("users")
    .find({ username: username })
    .toArray();
}
