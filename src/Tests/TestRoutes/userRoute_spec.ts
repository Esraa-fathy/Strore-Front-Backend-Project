import supertest from 'supertest';
import {User,Model_OF_User} from '../../models/userModel';
import app from '../../server';
import pool from '../../db';

const UserTest = new Model_OF_User();
const req = supertest(app);
let Token: string = '';

describe('Endpoint of user Route', () => {
  beforeAll(async () => {
    const user: User = {
        first_name: "Naglaa",
        last_name: "fathy",
        email: "Esraa@gmail.com",
        pass: "test",
      };

    await UserTest.create(user);
  });
  describe('TESTING LOGIN METHOD', () => {
    it('server giving user Naglaa a token', async () => {
      const res = await req
        .post('/login')
        .set('Content-type', 'application/json')
        .send({
        email: "Esraa@gmail.com",
          pass: 'test'
        });
      expect(res.status).toBe(200);
      Token = res.body as unknown as string;
      
    });
  });

  describe('Test CRUD API methods', () => {
    it("add new user", async () => {
      const res = await req
        .post('/users')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${Token}`)
        .send({
            first_name: "Esraa",
            last_name: "fathy",
            email: "Esraa555@gmail.com",
            pass: "test",
        });
      expect(res.status).toBe(200);
      
    });

    
    it('Display all of users', async () => {
      const res = await req
      .get('/users')
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${Token}`);
      expect(res.status).toBe(200);
    });
    
    it('display user of id 1', async () => {
      const res = await req
      .get('/users/1')
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${Token}`);
      expect(res.status).toBe(200);
    });
    
    it('update specefic user', async () => {
      const res = await req
      .put('/users/1')
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${Token}`)
      .send({
        first_name: "Asmaa",
        last_name: "fathy",
        email: "Esraa58728@gmail.com",
        pass: "test",
      });
      expect(res.status).toBe(200);
      
      });
  });
});