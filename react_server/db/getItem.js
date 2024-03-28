const {knex}=require('../config/connect')

const getItem=async(resid,catid)=>{
    const item=await knex.raw(`select * from res_cat_items where res_id=${resid} and res_cat_id=${catid};`)
    return item;
}

module.exports={getItem}