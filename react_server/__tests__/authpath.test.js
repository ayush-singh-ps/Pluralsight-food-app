
const {knex}=require('../config/connect')
const request = require("supertest");
const app = require("../app");
const api = request(app);

const link="/api/user/get-users"
test('it should return all users',async()=>{
    const users=await request(app).get(link)
   
    expect(users.statusCode).toBe(200)
})

test('POST /api/user/register should register a new user', async () => {
    const newUser = {
      name: 'Ayu Sha',
      email: 'atapta@example.com',
      password: 'password123',
    };
    const response = await request(app)
      .post('/api/user/register')
      .send(newUser);
    expect(response.statusCode).toBe(201);
  
  });

  test('POST /api/user/login should log in a user', async () => {
    const credentials = {
      email: 'atapta@example.com',
      password: 'password123',
    };
    const response = await request(app)
      .post('/api/user/login')
      .send(credentials);
    expect(response.statusCode).toBe(200);
    
  });

  test('POST /api/user/login should log in a user', async () => {
    const credentials = {
      email: 'at@example.com',
      password: 'password123',
    };
    const response = await request(app)
      .post('/api/user/login')
      .send(credentials);
    expect(response.statusCode).toBe(500);
    
  });