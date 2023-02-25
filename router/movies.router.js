import express from "express";
import { getAllMovies, getMovieById, createNewMovie, deleteMoviebyId, UpdateMovie } from "../service/movies.service.js";

const router = express.Router();

router.get("/", async function (request, response) {
  //FindCursor error will show -> pagination(20) by default.
  // Convert the cursor into an array.
  //toArray() method to be used
  const movie = await getAllMovies();
  // console.log(movie);
  response.send(movie);
});
router.get("/:id", async function (request, response) {
  const { id } = request.params;
  const movie = await getMovieById(id);
  console.log(movie);
  // const movie = movies.find((movie) => {
  //   return movie.id === id;
  // });

  movie ? response.send(movie) : response.send({ Message: "Movie not found" });
});
router.post("/", async function (request, response) {
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



