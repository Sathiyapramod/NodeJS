import { client } from "../index.js";

export async function createUser(data) {
  return await client.db("B42WD").collection("users").insertOne(data);
}
