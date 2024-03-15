const router=require('express').Router();
const display_route=require('./display_route')
const display_cat=require('./display_cat')
const showItem=require('./display_item')
const authRoutes=require('./auth')
const {jwtAuth}=require('../utils/jwtVerify')



router.use('/user',authRoutes)
router.use('/',jwtAuth,display_route);
router.use('/show',jwtAuth,display_cat);
router.use('/item',jwtAuth,showItem)
module.exports=router;