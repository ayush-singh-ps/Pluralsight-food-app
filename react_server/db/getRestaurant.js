const {knex}=require('../config/connect')

const getRestaurant=async()=>{
    const res=await knex.select('*').from('restaurant')
    return res;
}

module.exports={getRestaurant}