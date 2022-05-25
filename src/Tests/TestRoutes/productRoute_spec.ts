import supertest from 'supertest';
import {User,Model_OF_User} from '../../models/userModel';
import app from '../../server';
import pool from '../../db';

const UserTest = new Model_OF_User();
const req = supertest(app);
let Token: string = '';


describe('Endpoints of Product Route', () => {
  beforeAll(async () => {
    const user:User= {
      first_name: 'shams',
      last_name: 'mohy',
      email: 'shams@gmail',
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
            email: 'shams@gmail',
            pass: 'test55',
        });
      expect(res.status).toBe(200);
      Token = res.body as unknown as string;
    });
  });

  describe('Test CRUD API methods', () => {
    it('Add new product', async () => {
      const res = await req
        .post('/products')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${Token}`)
        .send({
          name: "cocacola",
          price: 12 ,
          category: 'Drinks'
        });
      expect(res.status).toBe(200);
      
    });

    it('Should display All products', async () => {
      const res = await req
        .get('/products')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${Token}`);
      expect(res.status).toBe(200);
      
    });

    it("should retereive information of specific product", async () => {
      const res = await req
        .get('/products/1')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${Token}`);
      expect(res.status).toBe(200);
    });

  });
});