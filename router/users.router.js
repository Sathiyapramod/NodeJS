import express from "express";
import { createUser } from "../service/users.service.js";
import bcrypt from "bcrypt";

const userRouter = express.Router();

async function generateHashedPasswords(password) {
  const no_of_rounds = 10;
  const salt = await bcrypt.genSalt(no_of_rounds); //salting process will take some time
  const hashedPassword = await bcrypt.hash(password, salt); // hashing process will take some time
  console.log(salt);
  console.log(hashedPassword);
  return hashedPassword;
}
generateHashedPasswords("bamboo");

userRouter.post("/signup", async function (request, response) {
  const { username, password } = request.body;
  //syntax for inserting a json data in mongoDB - db.collections.insertMany();
  const hashedPassword = generateHashedPasswords(password);
  const result = await createUser({
    username: username,
    password: hashedPassword,
  });
  // console.log(result);

  result ? response.send(result) : response.status(404).send({"message":"failed"})
});

export default userRouter;
