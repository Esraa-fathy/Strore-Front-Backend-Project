import pool from "../db";
export type Ordproducts = {
    id?: number;
 quantity: number;
  order_id?: number;
  product_id?: number;
};
 export class Model_OF_Ordproducts {

  async create(op: Ordproducts): Promise<Ordproducts> {
 
    try {
      const connection = await pool.connect();
      const sql =
      "INSERT INTO orderProducts (quantity,order_id,product_id) VALUES($1, $2,$3) RETURNING *";
      const result = await connection.query(sql, [
        op.quantity,
        op.order_id,
        op.product_id,
      ]);
      connection.release();
      const returningResult = result.rows[0] as Ordproducts;
      return returningResult;
    } catch (err) {
        throw new Error(
          `Could not create product: ${op.product_id} to order: ${op.order_id}: ${(err as Error ).message}`
        );
      }
    
  }

  async index(): Promise<Ordproducts[]> { 
    try {
      const connection  = await pool.connect();
      const sql = `SELECT * FROM orderProducts`;
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
        throw new Error(`Error at retrieving products in orders: ${(err as Error ).message}`);
      }
  }


  async orderinproduct(): Promise<{ order_id: number; name: string; price: string; quantity: number }[]> {
  try {
    const connection = await pool.connect();
    const sql =
      "SELECT order_id,name,price FROM products INNER JOIN orderPoducts ON product.id = orderPoducts.product_id";
    const result = await connection.query(sql);
    connection.release();
    return result.rows;
  } catch (err) {
    throw new Error(`unable get order in product: ${err}`);
  }
}


  async delete(order_id:number,product_id:number): Promise<Ordproducts> {
    try {
      const connection = await pool.connect();
      const sql = 'DELETE FROM orderProducts WHERE order_id=($1) and product_id=($2) RETURNING *';
      const result = await connection.query(sql, [order_id,product_id]);
      const returningResult = result.rows[0] as Ordproducts;
      connection.release();
      return returningResult;
    } catch (err) {
      throw new Error(`Could not delete product: ${product_id} in order ${order_id}, Please check error message: ${(err as Error).message}`);
    }
  }




  async update(op: Ordproducts): Promise<Ordproducts> {
    try {
      const connection = await pool.connect();
      const sql =
      'UPDATE orderProducts SET quantity=$1, order_id=$2, product_id=$3 WHERE id=$4 RETURNING *';
      const result = await connection.query(sql, [op.quantity, op.order_id, op.product_id, op.id]);  
      const returningResult = result.rows[0];
      console.log(returningResult);
      connection.release();

      return returningResult;
    }  catch(error){
        throw new Error(`Not able to update product (${op.product_id}) in order (${op.order_id}), Please check error message: ${(error as Error).message}`);
    }
  }


 }



