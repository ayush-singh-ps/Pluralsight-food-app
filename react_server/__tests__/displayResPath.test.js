const request = require("supertest");
const app = require("../app");
const api = request(app);
require('dotenv').config();
const jwt=require('jsonwebtoken')


const user=JSON.parse(process.env.TOKEN_USER)
const token = jwt.sign(user, process.env.SECRET, { expiresIn: '10m' });


const link="/api/"
test('it should return category of restaurant',async()=>{
    const res=await request(app).get(link).set('Authorization',`Bearer ${token}`)
   
    expect(res.statusCode).toBe(200)
})

test('it should return 20 category of one restaurant',async()=>{
    const res=await request(app).get(link).set('Authorization',`Bearer ${token}`).set('Accept','application/json').set('Content-Type', 'application/json')
   
    expect(res.body.length).toBe(20)
})


