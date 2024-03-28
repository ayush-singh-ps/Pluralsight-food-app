const request = require("supertest");
const app = require("../app");
const api = request(app);
require('dotenv').config();
const jwt=require('jsonwebtoken')


const user=JSON.parse(process.env.TOKEN_USER)
const token = jwt.sign(user, process.env.SECRET, { expiresIn: '10m' });
const link="/api/show/223"

test('it should return category of one restaurant',async()=>{
    const cat=await request(app).get(link).set('Authorization',`Bearer ${token}`)
   
    expect(cat.statusCode).toBe(200)
})

test('it should return 10 category of "223" restaurant',async()=>{
    const cat=await request(app).get(link).set('Authorization',`Bearer ${token}`)
   
    expect(cat.body.length).toBe(10)
})

test('it should return error',async()=>{
    const cat=await request(app).get('/api/show/2000').set('Authorization',`Bearer ${token}`)
   
    expect(cat.statusCode).toBe(500)
})