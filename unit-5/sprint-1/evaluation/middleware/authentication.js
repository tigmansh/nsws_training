const jwt = require("jsonwebtoken");

const authentication = (req, res, next)=> {
    const token = req.headers.authorization;
    if(!token) {
        res.send({err:"Please Login"});
    } else {
        const decoding = jwt.verify(token, "masai");
        if(decoding) {
            req.body.userId = decoding.userID;
            next();
        } else {
            res.send ({err: "Please Login"});
        }
    }
};
module.exports = { authentication };