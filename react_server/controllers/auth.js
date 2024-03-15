const {knex}=require('../config/connect')
const { compare }=require('bcryptjs')
const {hash}=require('bcryptjs')
const jwt=require("jsonwebtoken")


const getUsers = async (req, res) => {
    try {
      const users = await knex.select('*').from('users');
      res.status(200).json(users);
    } catch (error) {
    
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  const register = async (req,res,next) => {
   const {name,email,password}=req.body
    try {
        const hashedpass=await hash(password,10);
        await knex('users').insert({username:name,email:email,password:hashedpass})
      
        return res.status(201).json({
            success:true,
            message:'the registeration was successful'
        })
    }catch (error) {
      res.status(500).json({ error: error.message });
    }

  };

  const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const usr = await knex('users').select('*').where({ email: email })
      if (usr.length > 0) {
        const cpr = await compare(password, usr[0].password)
        if (cpr) {
          const token = jwt.sign(usr[0], 'secret', { expiresIn: '10m' });
          console.log(token);
  
         
          return res.json({ user: usr[0], token: token });
        } else {
          res.ok = false;
        }
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  

module.exports={getUsers,register,login};