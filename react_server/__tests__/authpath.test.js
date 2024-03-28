
const {knex}=require('../config/connect')
const request = require("supertest");
const app = require("../app");
const api = request(app);


const link="/api/user/get-users"


    const credentials = {
        email: 'ayush1402nba@gmail.com',
        password: 'Admin1234',
      };

test('it should return all users',async()=>{
    const users=await request(app).get(link)
   
    expect(users.statusCode).toBe(200)
})

test('POST /api/user/register should register a new user', async () => {
  
    const newUser = {
      name: 'Ayush PS',
      email: 'aa@example.com',
      password: 'Admin1234',
    };
    const response = await request(app)
      .post('/api/user/register')
      .send(newUser);
    expect(response.statusCode).toBe(201);

    await knex('users').where('email','=','aa@example.com').del()


  
  });
  test('POST /api/user/login should log in a user', async () => {
    
    const response = await request(app)
      .post('/api/user/login')
      .send({
        email: 'ayush1402nba@gmail.com',
        password: 'Admin1234',
      });
  
    expect(response.statusCode).toBe(200);
    
    
  });
  test('POST /api/user/login should log in a user with 400', async () => {
    
    const response = await request(app)
      .post('/api/user/login')
      .send({
        email: 'ayush',
        password: 'Admin12345678',
      });
      
    expect(response.statusCode).toBe(400);
    
    
  });

  test('POST /api/user/login should log in a user with error', async () => {
    const credentials = {
      email: 'at@example.com',
      password: 'Admin1234',
    };
    const response = await request(app)
      .post('/api/user/login')
      .send(credentials);
    expect(response.statusCode).toBe(500);
    
  });
  test('POST /api/user/login should log in a user with error 400', async () => {
    const credentials = {
      email: 'at@example.com',
      password: 'Ad',
    };
    const response = await request(app)
      .post('/api/user/login')
      .send(credentials);
    expect(response.statusCode).toBe(400);
    
  });