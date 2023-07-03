const jwt = require("jsonwebtoken");
const { blacklist } = require("../configs/blacklisting");
require("dotenv").config();
const authentication = (req, res, next) => {
  console.log(req.headers)
  var accessToken; var i;
  if(req.headers.cookie && !blacklist.includes(req.headers.cookie)){
    i = req.headers.cookie.split("; ");
  } else {
    return res.send({err:"Login to go further"});
  }
  let flag = 1;
  // console.log(i);
  if (i.length > 1) {
    let x = i[1];
    accessToken = x.split("=")[1];
  } else {
    let x = i[0].split("=");
    accessToken = x[1];
    flag = 0;
  }
  // console.log(accessToken);
  if (!accessToken) {
    return res.send({err: "Login Again Sir"});
  }

  try {
    if (flag == 1) {
      const decoded = jwt.verify(accessToken, process.env.firstTokenSecret);
      req.user = decoded;
      next();
    } else {
      const decoded = jwt.verify(accessToken, process.env.refreshedTokenSecret);
      req.user = decoded;
      next();
    }
  } catch (err) {
    return res.send({err:err.message});
  }
};

module.exports = { authentication };
