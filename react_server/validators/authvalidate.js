const Joi=require('joi')



const passwordValidate = (req, res, next) => {
    const schema = Joi.string().min(5).max(20).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required();
    const { error } = schema.validate(req.body.password);
    
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
next();
    
};
// const password=check('password').isLength({min:5,max:10}).withMessage('must be 5 and less than 11')

module.exports={
    passwordValidate
}