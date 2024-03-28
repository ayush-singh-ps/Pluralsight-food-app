const { knex }=require("../config/connect")

const getCat=async(id)=>{
    const cat=await knex.raw(`SELECT *
    FROM res_category 
    WHERE id IN (SELECT cat_id FROM res_cat_rel WHERE res_id = ${id})`)
    return cat;
}

module.exports={getCat}