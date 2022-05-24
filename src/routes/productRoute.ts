import express, { Request, Response,Router } from "express";
import {create,displayAll,show,Delete,update,} from "../helpers/productHelper";
import verifyAuthToken from "./Authenticatin/verifyAuthentication";
const productRoute = express();
productRoute.get("/TestingP", (req: Request, res: Response) => {
  try {
    res.send("Product Middleware is Runing!");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});
console.log(`Product Middleware is Runing!`);
productRoute.post("/products",verifyAuthToken, create);
productRoute.get("/products", verifyAuthToken, displayAll);
productRoute.get("/products/:id", verifyAuthToken, show);
productRoute.delete("/products/:id", verifyAuthToken,Delete);
productRoute.put("/products/:id", verifyAuthToken,update);


export default productRoute;