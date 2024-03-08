const {knex}=require('../config/connect')

const showCat=async (req,res,next)=>{
    const { id } = req.params;
   try {
   const qry=await knex.raw(`SELECT *
   FROM res_category 
   WHERE id IN (SELECT cat_id FROM res_cat_rel WHERE res_id = ${id})`)

  res.send(qry.rows)

   } catch (error) {
    console.log(error.message)
   }

    next();

}

module.exports={showCat}






