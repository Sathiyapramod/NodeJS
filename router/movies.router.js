import express from "express";
import {
  getAllMovies,
  getMovieById,
  createNewMovie,
  deleteMoviebyId,
  UpdateMovie,
} from "../service/movies.service.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

//GET all movies
router.get("/", auth, async function (request, response) {
  const movie = await getAllMovies();
  // console.log(movie);
  response.send(movie);
});

//GET movies by id
router.get("/:id", auth, async function (request, response) {
  const { id } = request.params;
  const movie = await getMovieById(id);
  console.log(movie);
  // const movie = movies.find((movie) => {
  //   return movie.id === id;
  // });

  movie ? response.send(movie) : response.send({ Message: "Movie not found" });
});

//CREATE a new Movie
router.post("/", auth, async function (request, response) {
  const movie = request.body;
  //syntax for inserting a json data in mongoDB - db.collections.insertMany();
  const result = await createNewMovie(movie);
  console.log(result);
  response.send(result);
});

router.delete("/:id", async (request, response) => {
  const { id } = request.params;
  //syntax for delete at mongoDB => db.collection.deleteOne({id:id})
  const movie = await deleteMoviebyId(id);
  // console.log(movie);

  movie.deletedCount >= 1
    ? response.send({ message: "Movie deleted successfully" })
    : response.status(404).send({ message: "Movie not found" });
});
router.put("/:id", async (request, response) => {
  const { id } = request.params;
  const movie = request.body;
  console.log(movie, id);
  const result = await UpdateMovie(id, movie);

  result
    ? response.send({ message: "Movie updated successfully" })
    : response.status(404).send({ message: "Movie updated successfully" });
});

export default router;
