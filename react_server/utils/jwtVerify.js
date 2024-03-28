const jwt=require("jsonwebtoken")


exports.jwtAuth=(req,res,next)=>{
    
    // console.log(tok)
    
    
    // console.log(token)
    try{
        const tok = req.headers.authorization;
        const token=tok.split(' ')[1];
        const user=jwt.verify(token,'secret');
        // console.log(user)
        req.user=user;
        next();
    }
    catch(err){
        res.json({error:'error fetching'})
        // return res.redirect("/login")
    }

};