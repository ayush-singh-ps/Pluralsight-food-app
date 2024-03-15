const {knex}=require('../config/connect')

const showCat=async (req,res,next)=>{
    const { id } = req.params;
   try {
      const qry=await knex.raw(`SELECT *
      FROM res_category 
      WHERE id IN (SELECT cat_id FROM res_cat_rel WHERE res_id = ${id})`)

    if((qry.rows).length>0)res.status(200).send(qry.rows)
    else throw error;

   } catch (error) {
    res.status(500).send(error)
   }
   
    
}

module.exports={showCat}






