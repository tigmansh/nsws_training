const validateUser = (req,res,next) => {
    const password = req.query.password;
    const role = req.query.role;
    if(password === '5567' && role === 'admin') {
        next();
    } else {
        res.status(404).send({error: "You are not authorised to do this operation"});
    }
};

module.exports={validateUser};