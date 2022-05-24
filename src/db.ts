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
 

// if (ENV === "test") {
//   console.log("test environment");
//   client = new Pool({
//     host: host,
//     database: DB_TEST,
//     user: pg_user,
//     password: pg_password,
//   });
// } else {
//   console.log("develope environment");
//   client = new Pool({
//     host: host,
//     database: pg_db,
//     user: pg_user,
//     password: pg_password,
//   });
// }

export default pool ;