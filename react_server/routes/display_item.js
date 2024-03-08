const {showItem}=require('../controllers/items')

const router = require("express").Router();

router.get('/:resid/:catid', showItem);

module.exports=router