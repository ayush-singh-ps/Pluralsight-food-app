const { getItem } = require("../db/getItem");


const showItem=async (req,res,next)=>{
    const { resid,catid } = req.params;
   try {
   const qry=await getItem(resid,catid);

  if(((qry.rows).length)>0)res.status(200).send(qry.rows)
  else throw error;

   } catch (error) {
    res.status(500).send('database error')
   }

   

}

module.exports={showItem}






