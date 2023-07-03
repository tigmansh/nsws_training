const jwt = require("jsonwebtoken");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

require("dotenv").config();

const authentication = async (req, res, next) => {
  console.log(req.cookies);

  try {
    if (req.cookies.firsttoken) {
      const decoded = jwt.verify(
        req.cookies.firsttoken,
        process.env.firstTokenSecret
      );
      req.user = decoded;
      next();
    } else if (req.cookies.refreshtoken && !req.cookies.firsttoken) {
      let x = await fetch(`http://localhost:${process.env.PORT}/user/refresh_token`, {
        headers: {
          Cookie: `refreshtoken=${req.cookies.refreshtoken}`,
        },
      }).then((res) => res.json());

      const decoded = jwt.verify(x.firsttoken, process.env.firstTokenSecret);
      req.user = decoded;
      if (decoded) {
        res.cookie("firsttoken", x.firsttoken, {
          httpOnly: true,
          maxAge: 60 * 60 * 1000,
        });
        next();
      }
    } else {
      res.send({ msg: "Login again" });
    }
  } catch (err) {
    return res.send({ err: err.message });
  }
};

module.exports = { authentication };
