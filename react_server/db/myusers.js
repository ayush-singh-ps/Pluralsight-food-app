const {knex}=require('../config/connect')

const myUsers=async()=>{
    const dbusr=await knex.select('*').from('users')
    return dbusr;
}
const checkUser=async(email)=>{
    const usr=await knex('users').select('*').where({ email: email })
    return usr;
}

const insertUser=async(name,email,hashedpass)=>{
    await knex('users').insert({username:name,email:email,password:hashedpass})
}

module.exports={myUsers,checkUser,insertUser}