import pool from "../db";
export type Product = {
  id?: number;
  name: string;
  price: number;
  category: string;
 
};


 export class Model_OF_Product {


    // create new product
  async create(p: Product): Promise<Product> {

    try {
      const connection = await pool.connect();
      const sql =
        "INSERT INTO products (name,price,category) VALUES($1, $2,$3) RETURNING *";
      const result = await connection.query(sql, [
        p.name,
        p.price,
        p.category,
        //hash,
      ]);
      connection.release();
      const returningResult = result.rows[0] as Product;
      return returningResult;
    } catch(error){
        throw new Error(`Not able to create product (${p.name}), Please check error message: ${(error as Error).message}`);
    }
    
  }

// show all product
  async displayAllproducts(): Promise<Product[]> { // retrieve list of all products in db
    try {
      const connection  = await pool.connect();
      const sql = `SELECT * FROM products`;
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch(err){
        console.log(err)
         throw new Error(`Not able to retrieve or show all products, Please check error message: ${(err as Error).message}`);
    }
  }


 // get specefic product
  async showOneProduct(id: string): Promise<Product> {
    try {
      const connection = await pool.connect();
      const sql = "SELECT * FROM products WHERE id=($1)";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch(error){
        throw new Error(`Not able to retrieve this product, Please check error message: ${(error as Error).message}`);
    }
  }

// Delete specefic product
  async delete(id: string): Promise<Product> {
    try {
      const connection = await pool.connect();
      const sql = "DELETE FROM products WHERE id=($1) RETURNING * ";
      const result = await connection.query(sql, [id]);
      const returningResult = result.rows[0] as Product;
      connection.release();
      return returningResult;
    } catch(error){
        throw new Error(`Not able to delete this product, Please check error message: ${(error as Error).message}`);
    }
  }



// update specefic product
  async update(p: Product): Promise<Product> {
    try {
      const connection = await pool.connect();
      const sql =
        "UPDATE products SET name= $1 ,price= $2 ,category = $3 WHERE id=$4 RETURNING *";
      const result = await connection.query(sql, [
        p.name,
        p.price,
        p.category,
        p.id
      ]);
      const returningResult = result.rows[0];
      console.log(returningResult);
      connection.release();

      return returningResult;
    }  catch(error){
        throw new Error(`Not able to update product (${p.name}), Please check error message: ${(error as Error).message}`);
    }
  }
 }