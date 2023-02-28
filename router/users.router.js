import express from "express";
import { client } from "../index.js";
import { createUser, userfromDB } from "../service/users.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

async function generateHashedPasswords(password) {
  const no_of_rounds = 10;
  const salt = await bcrypt.genSalt(no_of_rounds); //salting process will take some time
  const hashedPassword = await bcrypt.hash(password, salt); // hashing process will take some time
  // console.log(salt);
  // console.log(hashedPassword);
  return hashedPassword;
}

userRouter.post("/signup", async function (request, response) {
  const { username, password } = request.body;
  //syntax for inserting a json data in mongoDB - db.collections.insertMany();
  const hashedPassword = generateHashedPasswords(password);
  const result = await createUser({
    username: username,
    password: hashedPassword,
  });
  console.log(result);
  result
    ? response.send(result)
    : response.status(404).send({ message: "failed" });
});

userRouter.post("/login", async (request, response) => {
  const { username, password } = request.body;
  const data = await userfromDB(username);
  if (!data) {
    response.send({ message: "Invalid credentials " });
  } else {
    // console.log(data);
    const storedPassword = data.password;
    const ispasswordcheck = await bcrypt.compare(password, storedPassword);
    // console.log(ispasswordcheck);
    if (ispasswordcheck) {
      const token = jwt.sign({ id: data._id }, process.env.SECRET_KEY);
      response.send({ message: "Success", token: token });
      // response.send({"message":"Success"});
    } else response.send({ message: "Failure" });
  }
});

export default userRouter;
