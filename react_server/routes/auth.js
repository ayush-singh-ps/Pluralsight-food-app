const {Router}=require('express')
const {getUsers,register,login}=require('../controllers/auth')
const {  passwordValidate }=require('../validators/authvalidate')
const { validatepass }=require('../validators/loginvalidator')



const route=Router();

route.get('/get-users',getUsers)
route.post('/register',validatepass,register)
route.post('/login',login)


module.exports=route;

