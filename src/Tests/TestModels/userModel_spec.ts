import pool from "../../db";
import { User, Model_OF_User } from "../../models/userModel";

const module = new Model_OF_User();
//let user_test: User;

describe("USER MODEL", () => {
  describe("Test CRUD API methods", () => {
    it(" create method ", () => {
        expect(module.create).toBeDefined();
      });
    it(" displayAllusers method ", () => {
        expect(module.displayAllusers).toBeDefined();
      });
    it(" showOneUsr method ", () => {
      expect(module.showOneUsr).toBeDefined();
    });
    it(" update method ", () => {
      expect(module.update).toBeDefined();
    });
    it(" Delete method ", () => {
      expect(module.delete).toBeDefined();
    });
  });
  // afterAll(async () => {
  //   const connection = await pool.connect();
  //   const sql =
  //     'DELETE FROM orderProducts;\nDELETE FROM orders;\nDELETE FROM products;\nDELETE FROM users;';
  //   await connection.query(sql);
  //   connection.release();
  // });
  it("Shoud create new user", async () => {
    const result = await module.create({
      first_name: "nono",
      last_name: "Fathy",
      email: "n@jjsgmail",
      pass: "test",
    });
   // user_test = result;
   console.log(result.id);
    expect(result.first_name).toEqual("nono");
    expect(result.last_name).toEqual("Fathy");
    expect(result.email).toEqual("n@jjsgmail");
  });

  it("Should display a specefic user", async () => {
    const result = await module.showOneUsr("1");
    expect(result.first_name).toEqual("nono");
    expect(result.last_name).toEqual("Fathy");
    expect(result.email).toEqual("n@jjsgmail");
  });

  it("Should list all of users", async () => {
    const users = await module.displayAllusers();
    expect(users.length).toBeGreaterThan(0);
  });
});