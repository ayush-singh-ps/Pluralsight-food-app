const {getCat}=require('../db/getCat')

const showCat=async (req,res,next)=>{
    const { id } = req.params;
   try {
      const qry=await getCat(id)

    if((qry.rows).length>0)res.status(200).send(qry.rows)
    else throw error;

   } catch (error) {
    res.status(500).send('Database Error')
   }

    
}

module.exports={showCat}






