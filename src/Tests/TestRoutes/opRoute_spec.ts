import supertest from 'supertest';
import {User,Model_OF_User} from '../../models/userModel';
import {Product,Model_OF_Product} from '../../models/productModel';
import {Order,Model_OF_Order} from '../../models/orderModel';
import {Ordproducts} from '../../models/ordproductsModel';
import app from '../../server';
import pool from '../../db';


const UserTest = new Model_OF_User();
const ProductTest  = new Model_OF_Product();
const OrderTest  = new Model_OF_Order();
const req = supertest(app);
let Token: string = '';

describe(' Endpoints of OP API', () => {
    const user:User= {
        first_name: 'sohila',
        last_name: 'mohy',
        email: 'sohaila@gmail',
        pass: 'test55',
      };

  const product:Product = {
    name: 'break',
    price: 9,
    category: 'food'
  } ;

  const order:Order = {
    user_id: 1,
    status: 'active'
  } ;

  const op: Ordproducts= {
    quantity: 5,
    order_id: 1,
    product_id: 1
  } ;

  beforeAll(async () => {
    await UserTest.create(user);
   });

  afterAll(async () => {
    const connection = await pool.connect();
    const sql =
      'DELETE FROM orderProducts;\nALTER SEQUENCE orderProducts_id_seq RESTART WITH 1;\nDELETE FROM orders;\nALTER SEQUENCE orders_id_seq RESTART WITH 1;\nDELETE FROM products;\nALTER SEQUENCE products_id_seq RESTART WITH 1;\nDELETE FROM users;\nALTER SEQUENCE users_id_seq RESTART WITH 1';
    await connection.query(sql);
    connection.release();
  });

  describe(' Authenticate method Testing', () => {
    it('should check if user is authenticated or not to send a Token', async () => {
      const res = await req
        .post('/login')
        .set('Content-type', 'application/json')
        .send({
            email: 'sohaila@gmail',
            pass: 'test55',
        });
      expect(res.status).toBe(200);
      Token = res.body as unknown as string;
    });
  });
  describe('Test CRUD API methods', () => {
    it('Get order_in_product', async () => {
      const res = await req
        .get('/op')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${Token}`)
        .send();
      expect(res.status).toBe(200);
      
    }); 
  });
  
});