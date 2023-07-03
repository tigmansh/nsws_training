const express = require("express");
const app = express();

const redis = require("redis");
const client = redis.createClient();

client.connect();

client.on("error", (err) => {
  console.error("Error connecting to Redis:", err);
});

app.use(express.json());

app.post("/set/:key", async (req, res) => {
  const key = req.params.key;
  const message = req.body.message;
  await client.set(key, message);
  res.send(`Your message is saved with key ${key}`);
});

app.get("/get/:key", async (req, res) => {
  const key = req.params.key;
  const message = await client.get(key);
  if (message) {
    res.send(message);
  } else {
    res.status(404).send(`No message found with key ${key} or there might be some error.`);
  }
});

app.listen(8000, () => {
  console.log("Server listening at 8000");
});
