
// const {knex}=require('../config/connect')
const request = require("supertest");
const app = require("../app");
const api = request(app);

const link="/api/item/223/154"
test('it should return all item of a restaurant category',async()=>{
    const items=await api.get(link)
   
    expect(items.statusCode).toBe(200)
})

test('it should return all 9 item of a  category',async()=>{
    const items=await api.get(link)
   
    expect(items.body.length).toBe(9)
})

test('it should return error',async()=>{
    const items=await api.get("/api/item/223/15")
   
    expect(items.statusCode).toBe(500)
})