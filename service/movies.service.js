import { client } from "../index.js";

export async function deleteMoviebyId(id) {
  return await client
    .db("B42WD")
    .collection("movies")
    .deleteMany({ id: id });
}
export async function UpdateMovie(id, movie) {
  return await client
    .db("B42WD")
    .collection("movies")
    .deleteMany({ id: id }, { $set: movie });
}
export async function createNewMovie(movie) {
  return await client
    .db("B42WD")
    .collection("movies")
    .insertMany(movie);
}
export async function getMovieById(id) {
  return await client
    .db("B42WD")
    .collection("movies")
    .findOne({ id: id });
}
export async function getAllMovies() {
  return await client
    .db("B42WD")
    .collection("movies")
    .find({})
    .toArray();
}
