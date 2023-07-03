const jwt = require("jsonwebtoken");
const { get } = require("mongoose");
const redis = require("redis");
const client = redis.createClient();

client.connect();

client.on("error", (err) => {
  console.error("Error connecting to Redis:", err);
});


const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

require("dotenv").config();

const authentication = async (req, res, next) => {
  try {
    const data = await client.get("token");
    const token = JSON.parse(data);

    const data2 = await client.get("refreshToken");
    const refreshtoken = JSON.parse(data2);
    if (token) {
      const decoded = jwt.verify(
       token,
        process.env.firstTokenSecret
      );
      req.user = decoded;
      next();
    } else if (refreshtoken && !token) {
      let x = await fetch(`http://localhost:${process.env.PORT}/user/refresh_token`).then((res) => res.json())

      const decoded = jwt.verify(x.token, process.env.firstTokenSecret);
      req.user = decoded;
      if (decoded) {
        await client.SETEX("token", 3600, JSON.stringify(token));
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
