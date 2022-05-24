import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
  try {
      //headers.authorization=>   bearer<> Token
    const authorizationHeader = req.headers.authorization as string;
    const token = authorizationHeader.split(" ")[1];
    jwt.verify(token, process.env.TOKEN as string);
    const role = parseJwt(token as string);
    req.body.userRole = role.user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401);
    res.json("Access denied, invalid token");
  }
};
export default verifyAuthToken;
const parseJwt = (token: string) => {
  const base64Payload = token.split(".")[1];
  const payload = Buffer.from(base64Payload, "base64");
  return JSON.parse(payload.toString());
};