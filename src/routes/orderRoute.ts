import express, { Request, Response,Router } from "express";
import {
 create,displayAll,show,Delete,update,
} from "../helpers/orderHelper";
import verifyAuthToken from "./Authenticatin/verifyAuthentication";
const orderRoute = express();
orderRoute.get("/TestingO", (req: Request, res: Response) => {
  try {
    res.send("Order Middleware is Runing!");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});
console.log(`Order Middleware is Runing!`);
orderRoute.post("/orders",verifyAuthToken, create);
orderRoute.get("/orders", verifyAuthToken, displayAll);
orderRoute.get("/orders/:id", verifyAuthToken, show);
orderRoute.delete("/orders/:id",verifyAuthToken, Delete);
orderRoute.put("/orders/:id",verifyAuthToken, update);


export default orderRoute;