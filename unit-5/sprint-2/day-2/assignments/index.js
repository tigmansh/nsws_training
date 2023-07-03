const express = require("express");

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();

const client_id = "1e36a8ffec439b7efc55";
const client_secret = "ed5f128e6d8c97ae5ed6212b58b6b5ab2bbe26bb";
app.get("/", (req, res) => {
  res.send("API Based Endpoint");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/auth/github", async(req, res) => {
  let code = req.query.code;
  const access_token = await fetch("https://github.com/login/oauth/access_token", {
    method:"POST",
    headers: {
        Accept : "application/json",
        "content-type" : "application/json"
    },
    body: JSON.stringify({
        client_id : client_id,
        client_secret : client_secret,
        code
    })
  }).then((res)=> res.json());

  const accessToken = access_token.access_token;
  console.log(accessToken);
  
  const userDetail = await fetch("https://api.github.com/user",{
    headers : {
        Authorization: `Bearer ${accessToken}`
    }
  }).then((res)=> res.json());
  
  console.log(userDetail);
  
  res.send(
    "Here You Comes After GitHub Authenticates"
  );
});

app.listen(8080, () => {
  console.log("listening to port 8080");
});
