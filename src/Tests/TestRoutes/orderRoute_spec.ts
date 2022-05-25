import supertest from 'supertest';
import {User,Model_OF_User} from '../../models/userModel';
import app from '../../server';
import pool from '../../db';

const UserTest = new Model_OF_User();
const req = supertest(app);
let Token: string = '';

describe('Endpoints of order Route', () => {
  beforeAll(async () => {
    const user:User= {
        first_name: 'sohila',
        last_name: 'mohy',
        email: 'sohaila@gmail',
        pass: 'test55',
      };
  
      await UserTest.create(user);
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
console.log()
  describe('Test CRUD API methods', () => {
    it('should adding new order', async () => {
      const res = await req
        .post('/orders')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${Token}`)
        .send({
       user_id:1,
       status:"Active"
        });
      expect(res.status).toBe(200);
      
    });

    it('should display all orders', async () => {
      const res = await req
        .get('/orders')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${Token}`);
      expect(res.status).toBe(200);
      
    });

    it("should retereive information of specific order", async () => {
      const res = await req
        .get('/orders/1')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${Token}`);
      expect(res.status).toBe(200);
      
    });


  });
});