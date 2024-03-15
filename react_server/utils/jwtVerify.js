const jwt=require("jsonwebtoken")


exports.jwtAuth=(req,res,next)=>{
    const tok = req.headers.authorization;
    // console.log(tok)
    const token=tok.split(' ')[1];
    
    // console.log(token)
    try{
        const user=jwt.verify(token,'secret');
        // console.log(user)
        req.user=user;
        next();
    }
    catch(err){
        res.clearCookie("token");
        return res.redirect("/login")
    }

};