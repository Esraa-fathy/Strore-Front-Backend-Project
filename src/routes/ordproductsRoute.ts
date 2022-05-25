import express, { Request, Response,Router } from "express";
import {
 create,index,
 orderinproduct,
 Delete,update,
} from "../helpers/ordproductsHelper";
import verifyAuthToken from "./Authenticatin/verifyAuthentication";
const ordproductsRoute = express();
ordproductsRoute.get("/TestingOP", (req: Request, res: Response) => {
  try {
    res.send("OrderProducts Middleware is Runing!");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});
console.log(`OrderProducts Middleware is Runing!`);
ordproductsRoute.post("/op", verifyAuthToken,create);
ordproductsRoute.get("/op", verifyAuthToken ,index);
ordproductsRoute.get("/ops", verifyAuthToken, orderinproduct);
ordproductsRoute.delete("/op/:id/:id",verifyAuthToken, Delete);
ordproductsRoute.put("/op/:id",verifyAuthToken ,update);

export default ordproductsRoute;