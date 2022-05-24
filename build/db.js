"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, NODE_ENV = _a.NODE_ENV, HOST = _a.HOST, db_pg = _a.db_pg, TEST_DB = _a.TEST_DB, USERName_DB = _a.USERName_DB, passward_DB = _a.passward_DB, TOKEN = _a.TOKEN;
console.log("database connected");
var pool = new pg_1.Pool({
    host: HOST,
    database: NODE_ENV === 'dev' ? db_pg : TEST_DB,
    user: USERName_DB,
    password: passward_DB,
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
exports.default = pool;
