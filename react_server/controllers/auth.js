const {knex}=require('../config/connect')
const { compare }=require('bcryptjs')
const {hash}=require('bcryptjs')
const jwt=require("jsonwebtoken")
const {myUsers,checkUser,insertUser}=require("../db/myusers")


const getUsers = async (req, res) => {
    try {
      const users = await myUsers();
      res.status(200).json(users);
    } catch (error) {
    
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  const register = async (req,res) => {
   const {name,email,password}=req.body
    try {
        const hashedpass=await hash(password,10);
        
        insertUser(name,email,hashedpass);
        return res.status(201).json({
            success:true,
            message:'the registeration was successful'
        })
    }catch (error) {
      res.status(500).json({ error: error.message });
    }

  };

  const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const usr = await checkUser(email);
      // console.log(usr[0])
      if (usr.length > 0) {
        const cpr = await compare(password, usr[0].password)
        if (cpr) {
          const token = jwt.sign(usr[0], 'secret', { expiresIn: '10m' });
          return res.json({ user: usr[0], token: token });
        } else {
          res.ok = false;
          res.status(500).json({ error: "Incorrect password" });
        }
      } else {
        res.status(500).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  

module.exports={getUsers,register,login};