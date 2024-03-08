const {showCat}=require('../controllers/category')

const router = require("express").Router();

router.get('/:id', showCat);

module.exports=router