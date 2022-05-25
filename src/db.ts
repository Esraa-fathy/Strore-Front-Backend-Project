import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
const { 
    NODE_ENV, 
    HOST, 
    db_pg,
    TEST_DB,
    USERName_DB,
    passward_DB,
    TOKEN } = process.env;
    console.log("database connected");
 const pool = new Pool({
 
    host: HOST,
    database: NODE_ENV ===  'dev' ? db_pg:TEST_DB,
    user: USERName_DB,
    password:passward_DB,

  });
 

export default pool ;