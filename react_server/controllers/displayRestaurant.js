const {knex}=require('../config/connect')
const { getRestaurant } = require('../db/getRestaurant')


const displayRestaurant=async (req, res,next) => {
    try {
       
        const qry=await getRestaurant();
        res.send(qry)
        
    } catch (error) {
        res.send('No restaurants')
    }
    // next();
   
}

module.exports={displayRestaurant};