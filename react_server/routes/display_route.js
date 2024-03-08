const {displayRestaurant}=require('../controllers/displayRestaurant')

const router = require("express").Router();

router.get('/', displayRestaurant);

module.exports=router