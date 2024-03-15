const {knex}=require('../config/connect')

const displayRestaurant=async (req, res,next) => {
    try {
        console.log(req.cookies)
        const qry=await knex.select('*').from('restaurant')
        res.send(qry)
        
    } catch (error) {
        res.send('error')
    }
    next();
   
}

module.exports={displayRestaurant};