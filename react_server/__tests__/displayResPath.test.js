const request = require("supertest");
const app = require("../app");
const api = request(app);


const link="/api/"
test('it should return category of restaurant',async()=>{
    const res=await request(app).get(link)
   
    expect(res.statusCode).toBe(200)
})

test('it should return 20 category of one restaurant',async()=>{
    const res=await request(app).get(link)
   
    expect(res.body.length).toBe(20)
})



