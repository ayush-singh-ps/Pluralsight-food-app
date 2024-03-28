
// const {knex}=require('../config/connect')
const request = require("supertest");
const app = require("../app");
const api = request(app);
require('dotenv').config();
const jwt=require('jsonwebtoken')


const user=JSON.parse(process.env.TOKEN_USER)
console.log(user)
const token = jwt.sign(user, process.env.SECRET, { expiresIn: '10m' });

const link="/api/item/223/154"
test('it should return all item of a restaurant category',async()=>{
    const items=await api.get(link).set('Authorization',`Bearer ${token}`)
   
    expect(items.statusCode).toBe(200)
})

test('it should return all 9 item of a  category',async()=>{
    const items=await api.get(link).set('Authorization',`Bearer ${token}`)
   
    expect(items.body.length).toBe(9)
})

test('it should return error',async()=>{
    const items=await api.get("/api/item/223/15").set('Authorization',`Bearer ${token}`)
   
    expect(items.statusCode).toBe(500)
})
test('it should return error cz of no token',async()=>{
    const items=await api.get("/api/item/223/15")
   
    expect(items.text).toBe('{\"error\":\"error fetching\"}')
})