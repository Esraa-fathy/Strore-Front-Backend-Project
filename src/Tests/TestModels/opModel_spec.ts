import { User, Model_OF_User } from "../../models/userModel";
import { Product, Model_OF_Product } from "../../models/productModel";
import { Order, Model_OF_Order } from "../../models/orderModel";
import{Ordproducts,Model_OF_Ordproducts} from '../../models/ordproductsModel';
import pool from "../../db";
const userTestModel = new Model_OF_User();
const productTestModel = new Model_OF_Product();
const orderTestModel = new Model_OF_Order();
const OPTestModel = new Model_OF_Ordproducts();
describe("ORDER_PRODUCT METHOD", () => {
  describe("Test CRUD API methods", () => {
    it("orderinproduct Method", () => {
      expect(OPTestModel.orderinproduct).toBeDefined();
    });
  });
  describe("Test Model logic", () => {
    const user: User = {
      first_name: "Naglaa",
      last_name: "fathy",
      email: "naglaafathy4256219@gmail.com",
      pass: "test",
    };
    const products: Product = {
        name: "fried Checken",
        price: 100,
        category: "food",
      };

      const orders: Order = {
        user_id: 1,
        status: "active",
      };
    const OP: Ordproducts = {
      quantity: 55,
      order_id: 1,
      product_id: 1,
    };
    beforeAll(async () => {
      await userTestModel.create(user);
      await orderTestModel.create(orders);
      await productTestModel.create(products);
    });
    afterAll(async () => {
      const connection = await pool.connect();
      const sql =
        "DELETE FROM orderProducts;\nALTER SEQUENCE orderProducts_id_seq RESTART WITH 1;\nDELETE FROM orders;\nALTER SEQUENCE orders_id_seq RESTART WITH 1;\nDELETE FROM products;\nALTER SEQUENCE products_id_seq RESTART WITH 1;\nDELETE FROM users;\nALTER SEQUENCE users_id_seq RESTART WITH 1";
      await connection.query(sql);
      connection.release();
    });
    it("Add new op", async () => {
      const createdOrderProduct = await OPTestModel.create(OP);
      expect(createdOrderProduct.quantity).toEqual(55);
    });
  });
});