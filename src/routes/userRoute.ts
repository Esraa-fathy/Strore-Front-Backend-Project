import express, { Request, Response,Router } from "express";
import {create,displayAll,show,Delete,update,login,} from "../helpers/userHelper";
import verifyAuthToken from "./Authenticatin/verifyAuthentication";
const userRoute = express();
userRoute.get("/TestingU", (req: Request, res: Response) => {
  try {
    res.send("User Middleware is Runing!");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});
console.log(`User Middleware is Runing!`);
userRoute.post("/users", create);
userRoute.get("/users", verifyAuthToken ,displayAll);
userRoute.get("/users/:id", verifyAuthToken ,show);
userRoute.delete("/users/:id",verifyAuthToken ,Delete);
userRoute.put("/users/:id",verifyAuthToken ,update);
userRoute.route("/login").post(login);

export default userRoute;