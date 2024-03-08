const {knex}=require('../config/connect')
const { compare }=require('bcryptjs')
const {hash}=require('bcryptjs')


const getUsers = async (req, res) => {
    try {
      const users = await knex.select('*').from('users');
      res.json(users);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const register = async (req,res,next) => {
   const {username,email,password}=req.body
    try {
        const hashedpass=await hash(password,10);
        await knex('users').insert({username:username,email:email,password:hashedpass})

        return res.status(201).json({
            success:true,
            message:'the registeration was successful'
        })

    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }

  };

  const login=async(req,res,next)=>{
    console.log("fvmfkvnk-->", req.body);
    const {email,password}=req.body;
    console.log(email+'.'+password);
    res.set({
      'Access-Control-Allow-Origin': '*'});
    console.log(password)
    try {
     const usr=await knex('users').select('*').where({ email: email })
     if(usr.length>0){
      // const hashedpass=await hash(password,10);
      // const cpr=await compare(password,usr[0].password)
      const cpr=(password==usr[0].password)
      if(cpr)res.json({user:'verified'});
      else res.send('enter correct details')
     }
     else throw error;
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
    next();
  }

module.exports={getUsers,register,login};