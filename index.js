import * as dotenv from "dotenv";
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import express from "express";
//Inside the package.json file, change the "Type" : "module" instead of "commonjs"
import { MongoClient } from "mongodb";

const app = express();

//env stands for environment variables
console.log(process.env.MONGO_URL);

//inbuilt-middleware - include express.json()
//middleware - intercept - converting body to json()
//To avoid adding on every API, app.use() method declares it similar to globally
app.use(express.json());
const PORT = 4000;

//Using Local Database
// const MONGO_URL = "mongodb://127.0.0.1";

//Using Atlas DB
const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL); // dial

// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 , how are you");
});

app.get("/movies", async function (request, response) {
  //FindCursor error will show -> pagination(20) by default.
  // Convert the cursor into an array.
  //toArray() method to be used
  const movie = await client
    .db("B42WD")
    .collection("movies")
    .find({})
    .toArray();
  // console.log(movie);
  response.send(movie);
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

app.get("/movies/:id", async function (request, response) {
  const { id } = request.params;
  const movie = await client
    .db("B42WD")
    .collection("movies")
    .findOne({ id: id });
  console.log(movie);
  // const movie = movies.find((movie) => {
  //   return movie.id === id;
  // });

  movie ? response.send(movie) : response.send({ Message: "Movie not found" });
});

//Inserting a new Movie data to mongoDB

//inbuilt-middleware - express.json();
app.post("/movies", async function (request, response) {
  const movie = request.body;
  //syntax for inserting a json data in mongoDB - db.collections.insertMany();
  const result = await client
    .db("B42WD")
    .collection("movies")
    .insertMany(movie);
  console.log(result);
  response.send(result);
});

//Delete operation - Delete movie by id

app.delete("/movies/:id", async (request, response) => {
  const { id } = request.params;
  //syntax for delete at mongoDB => db.collection.deleteOne({id:id})
  const movie = await client
    .db("B42WD")
    .collection("movies")
    .deleteMany({ id: id });
  // console.log(movie);

  movie.deletedCount >= 1
    ? response.send({ message: "Movie deleted successfully" })
    : response.status(404).send({ message: "Movie not found" });
});

//Update operation - updating a movie by id
// using PUT

app.put("/movies/:id", async (request, response) => {
  const { id } = request.params;
  const movie = request.body;
  console.log(movie, id);
  const result = await client
    .db("B42WD")
    .collection("movies")
    .deleteMany({ id: id }, { $set: movie });

  result
    ? response.send({ message: "Movie updated successfully" })
    : response.status(404).send({ message: "Movie updated successfully" });
});
