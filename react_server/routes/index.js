const router=require('express').Router();
const display_route=require('./display_route')
const display_cat=require('./display_cat')
const showItem=require('./display_item')
const authRoutes=require('./auth')

router.use('/',display_route);
router.use('/show',display_cat);
router.use('/item',showItem)

router.use('/user',authRoutes)
module.exports=router;