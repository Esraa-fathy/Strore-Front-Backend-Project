import express, { Application, Request, Response,json } from "express";
import dotenv from 'dotenv';
 import userRoute from "./routes/userRoute";
 import productRoute from "./routes/productRoute";
 import orderRoute from "./routes/orderRoute";
import orderproductsRoute from "./routes/ordproductsRoute";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import ordproductsRoute from "./routes/ordproductsRoute";

dotenv.config();

const app: express.Application = express();
const port = process.env.DB_PORT || 3000;
app.use(cors(), helmet(), json(), morgan("dev"));

 app.use("/", userRoute);
app.use("/", productRoute);
app.use("/", orderRoute);
app.use("/", ordproductsRoute);


app.get("/server", (req: Request, res: Response) => {
  res.send("ZaZaFaza");
});
app.listen(port, () => {
  console.log(`Server starts at port: ${port}`);
});
export default app;