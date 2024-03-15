const {knex}=require('../config/connect')

const showItem=async (req,res,next)=>{
    const { resid,catid } = req.params;
   try {
   const qry=await knex.raw(`select * from res_cat_items where res_id=${resid} and res_cat_id=${catid};`)

  if(((qry.rows).length)>0)res.status(200).send(qry.rows)
  else throw error;

   } catch (error) {
    res.status(500).send(error)
   }

    next();

}

module.exports={showItem}






