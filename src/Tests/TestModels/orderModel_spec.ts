import { User, Model_OF_User } from "../../models/userModel";
import { Product, Model_OF_Product } from "../../models/productModel";
import { Order, Model_OF_Order } from "../../models/orderModel";
import pool from "../../db";

const userTestModel = new Model_OF_User();
const productTestModel = new Model_OF_Product();
const orderTestModel = new Model_OF_Order();

describe("ORDER MODEL", () => {
  describe("Test CRUD API methods", () => {
    it("create method", () => {
        expect(orderTestModel.create).toBeDefined();
      });
    it("displayAllorders method", () => {
      expect(orderTestModel.displayAllorders).toBeDefined();
    });
    it("showOneOrder method", () => {
      expect(orderTestModel.showOneOrder).toBeDefined();
    });
    it("Delete method", () => {
      expect(orderTestModel.delete).toBeDefined();
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

    beforeAll(async () => {
      await userTestModel.create(user);
    });
    afterAll(async () => {
      const connection = await pool.connect();
      const sql =
        "DELETE FROM orderProducts;\nALTER SEQUENCE orderProducts_id_seq RESTART WITH 1;\nDELETE FROM orders;\nALTER SEQUENCE orders_id_seq RESTART WITH 1;\nDELETE FROM products;\nALTER SEQUENCE products_id_seq RESTART WITH 1;\nDELETE FROM users;\nALTER SEQUENCE users_id_seq RESTART WITH 1";
      await connection.query(sql);
      connection.release();
    });
    it("adding new order", async () => {
      const createdOrder = await orderTestModel.create(orders);
      expect(createdOrder.id).toEqual(1);
    });

    it("Display All orders", async () => {
      const orders = await orderTestModel.displayAllorders();
      expect(orders.length).toBeGreaterThan(0);
    });

    it("retreive specefic order", async () => {
      const returnedOrder = await orderTestModel.showOneOrder("1");
      expect(returnedOrder.id).toEqual(1);
    });
  });
});