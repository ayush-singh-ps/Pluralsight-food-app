const request = require("supertest");
const app = require("../app");
const api = request(app);

const link="/api/show/223"
test('it should return category of one restaurant',async()=>{
    const cat=await request(app).get(link)
   
    expect(cat.statusCode).toBe(200)
})

test('it should return 10 category of "223" restaurant',async()=>{
    const cat=await request(app).get(link)
   
    expect(cat.body.length).toBe(10)
})

test('it should return error',async()=>{
    const cat=await request(app).get('/api/show/2000')
   
    expect(cat.statusCode).toBe(500)
})