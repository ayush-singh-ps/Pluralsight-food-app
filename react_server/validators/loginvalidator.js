const Joi=require('joi')

const validatepass=(req,res,next)=>{
    const emailSchema = Joi.string().email({
        minDomainSegments: 2,   // Ensure there is at least one dot in the domain part
        tlds: { allow: ['com', 'net', 'org'] }  // Allow specific top-level domains (optional)
      }).required();

      const email=req.body.email;

      const { error } = emailSchema.validate(email);
    
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
next();

}

module.exports={validatepass}