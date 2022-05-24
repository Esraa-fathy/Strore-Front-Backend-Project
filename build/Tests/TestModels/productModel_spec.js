"use strict";
// import { User, Model_OF_User } from "../../models/userModel";
// import { Product, Model_OF_Product } from "../../models/productModel";
// import { Order, Model_OF_Order } from "../../models/orderModel";
// import pool from "../../db";
// const userTestModel = new Model_OF_User();
// const productTestModel = new Model_OF_Product();
// const orderTestModel = new Model_OF_Order();
// describe("PRODUCT MODEL", () => {
//   describe("Test CRUD API methods", () => {
//     it(" create method ", () => {
//       expect(productTestModel.create).toBeDefined();
//     });
//     it(" DisplayAllproducts method", () => {
//       expect(productTestModel.displayAllproducts).toBeDefined();
//     });
//     it(" ShowOneProduct method", () => {
//       expect(productTestModel.showOneProduct).toBeDefined();
//     });
//     it(" Delete method ", () => {
//       expect(productTestModel.delete).toBeDefined();
//     });
//   });
//   describe("Test Model logic", () => {
//     const user: User = {
//       first_name: "Naglaa",
//       last_name: "fathy",
//       pass: "test",
//       email: "naglaafathy4256219@gmail.com",
//     };
//     const products: Product = {
//       name: "fried Checken",
//       price: 100,
//       category: "food",
//     };
//     const orders: Order = {
//       user_id: 1,
//       status: "active",
//     };
//     beforeAll(async () => {
//       await userTestModel.create(user);
//       await orderTestModel.create(orders);
//     });
//     afterAll(async () => {
//       const connection = await pool.connect();
//       const sql =
//         "DELETE FROM orderProducts;\nALTER SEQUENCE orderProducts_id_seq RESTART WITH 1;\nDELETE FROM orders;\nALTER SEQUENCE orders_id_seq RESTART WITH 1;\nDELETE FROM products;\nALTER SEQUENCE products_id_seq RESTART WITH 1;\nDELETE FROM users;\nALTER SEQUENCE users_id_seq RESTART WITH 1";
//       await connection.query(sql);
//       connection.release();
//     });
//     it("Add new pruduct", async () => {
//       const createdproduct = await productTestModel.create(products);
//       expect(createdproduct.id).toEqual(1);
//     });
//     it("List of product", async () => {
//       const products = await productTestModel.displayAllproducts;
//       expect(products.length).toBeGreaterThan(0);
//     });
//     it("Return specefic product", async () => {
//       const returnedproduct = await productTestModel.showOneProduct("1");
//       expect(returnedproduct.id).toEqual(1);
//     });
//   });
// });
