import pool from "../db";
import bcrypt from "bcrypt";
export type User = {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  pass: string;
};
// hashing password

const pepper = process.env.BCRYPT_PASSWORD;
const hashPassword = (password: string) => {
  const salt = process.env.SALT_ROUNDS;
  return bcrypt.hashSync(`${password}${pepper}`,parseInt( salt as unknown as string));
};
/**** This way also work, but I prfer using method hashPassword */
//  const salt = process.env.SALT_ROUNDS;
//  const pepper = process.env.BCRYPT_PASSWORD;
/******* */
 export class Model_OF_User {


    // create new user
  async create(u: User): Promise<User> {
    // const hash = bcrypt.hashSync( u.pass + pepper, parseInt(salt as string) );
    try {
      const connection = await pool.connect();
      const sql =
        "INSERT INTO users (first_name,last_name,email, pass) VALUES($1, $2,$3,$4) RETURNING * ";
      const result = await connection.query(sql, [
        u.first_name,
        u.last_name,
        u.email,
        hashPassword(u.pass),
      ]);
      connection.release();
      const returningResult = result.rows[0] as User;
      return returningResult;
    } catch(error){
        throw new Error(`Not able to create user (${u.first_name}), Please check error message: ${(error as Error).message}`);
    }
    
  }

// show all users
  async displayAllusers(): Promise<User[]> { // retrieve list of all users in db
    try {
      const connection  = await pool.connect();
      const sql = `SELECT * FROM users`;
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch(err){
        console.log(err)
         throw new Error(`Not able to retrieve or show all users, Please check error message: ${(err as Error).message}`);
    }
  }


 // get specefic user
  async showOneUsr(id: string): Promise<User> {
    try {
      const connection = await pool.connect();
      const sql = "SELECT * FROM users WHERE id=($1)";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0] as User;
      
    } catch(error){
        throw new Error(`Not able to retrieve this user, Please check error message: ${(error as Error).message}`);
    }
  }

// Delete specefic user
  async delete(id: string): Promise<User> {
    try {
      const connection = await pool.connect();
      const sql = "DELETE FROM users WHERE id=($1) RETURNING * ";
      const result = await connection.query(sql, [id]);
      const users = result.rows[0] as User;
      connection.release();
      return users;
    } catch(error){
        throw new Error(`Not able to delete this user, Please check error message: ${(error as Error).message}`);
    }
  }

// update specefic user 
  async update(u: User): Promise<User> {
    try {
      const connection = await pool.connect();
      const sql =
        "UPDATE users SET first_name= $1 ,last_name= $2 ,email = $3 ,pass = $4 WHERE id=$5 RETURNING *";
      const result = await connection.query(sql, [
        u.first_name,
        u.last_name,
        u.email,
        u.pass,
        u.id
      ]);
      const returningResult = result.rows[0];
      console.log(returningResult);
      connection.release();

      return returningResult;
    }  catch(error){
        throw new Error(`Not able to update user (${u.first_name}), Please check error message: ${(error as Error).message}`);
    }
  }
  
  async authenticate(email: string, pass: string) {
    try {
      const connection = await pool.connect();
      const sql = "SELECT pass FROM users WHERE email=($1)";
      const result = await connection.query(sql, [email]);
      connection.release();

      if (result.rows.length) {
        const user = result.rows[0];
       const isValidPassword=bcrypt.compareSync(pass + pepper, user.pass); // user.pass is the password in database
        if (isValidPassword) {
          return user;
        }
      }
      return null;
    } catch (err) {
      throw new Error(`Not Authenticated. ${err}`);
    }
  }
 }

