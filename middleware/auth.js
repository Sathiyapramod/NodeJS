//custom middleware
import jwt from "jsonwebtoken";

export const auth = (request, response, next) => {
  try {
    const token = request.header("x-auth-token");
    console.log(token);
    jwt.verify(token, process.env.SECRET_KEY);
    next(); //if error, next() will be skipped
  } catch (err) {
    response.send(401).send({ message: err.message });
  }
};
