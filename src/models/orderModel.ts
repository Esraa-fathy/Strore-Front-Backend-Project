import pool from "../db";
export type Order = {
  id?: number | undefined;
  user_id: number;
  status:string;
};

 export class Model_OF_Order {
    // create new order
  async create(o: Order): Promise<Order> {
    try {
      const connection = await pool.connect();
      const sql =
        "INSERT INTO orders (user_id,status) VALUES($1, $2) RETURNING *";
      const result = await connection.query(sql, [
        o.user_id,
        o.status,
      ]);
      connection.release();
      const returningResult = result.rows[0] as Order;
      return returningResult;
    } catch(error){
        throw new Error(`Not able to create order (${o.id}), Please check error message: ${(error as Error).message}`);
    }
    
  }

// show all orders
  async displayAllorders(): Promise<Order[]> { // retrieve list of all orders in db
    try {
      const connection  = await pool.connect();
      const sql = `SELECT * FROM orders`;
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch(err){
        console.log(err)
         throw new Error(`Not able to retrieve or show all orders, Please check error message: ${(err as Error).message}`);
    }
  }


 // get specefic order
  async showOneOrder(id: string): Promise<Order> {
    try {
      const connection = await pool.connect();
      const sql = "SELECT * FROM orders WHERE id=($1)";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch(error){
        throw new Error(`Not able to retrieve this order, Please check error message: ${(error as Error).message}`);
    }
  }

// Delete specefic order
  async delete(id: string): Promise<Order> {
    try {
      const connection = await pool.connect();
      const sql = "DELETE FROM orders WHERE id=($1) RETURNING * ";
      const result = await connection.query(sql, [id]);
      const returningResult = result.rows[0] as Order;
      connection.release();
      return returningResult;
    } catch(error){
        throw new Error(`Not able to delete this order, Please check error message: ${(error as Error).message}`);
    }
  }



// update specefic order
  async update(o: Order): Promise<Order> {
    try {
      const connection = await pool.connect();
      const sql =
        "UPDATE orders SET user_id= $1 ,status = $2 WHERE id=$3 RETURNING *";
      const result = await connection.query(sql, [
        o.user_id,
        o.status,
        o.id
      ]);
      const returningResult = result.rows[0];
      console.log(returningResult);
      connection.release();

      return returningResult;
    }  catch(error){
        throw new Error(`Not able to update order (${o.id}), Please check error message: ${(error as Error).message}`);
    }
  }

 }
