const {knex}=require('../config/connect')

const showItem=async (req,res,next)=>{
    const { resid,catid } = req.params;
   try {
   const qry=await knex.raw(`select * from res_cat_items where res_id=${resid} and res_cat_id=${catid};`)

  res.send(qry.rows)

   } catch (error) {
    console.log(error.message)
   }

    next();

}

module.exports={showItem}






