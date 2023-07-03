const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const httpServer = http.createServer(app);

httpServer.listen(7300);

app.get("/", (req, res) => {
  res.send("Voting Line");
});

const io = new Server(httpServer);

let candidates = {
  Gandhi: 0,
  Modi: 0,
  Kejriwal: 0,
  Akhilesh: 0,
};
let votedArray = [];
io.on("connection", (socket) => {
  console.log("client connected");

  io.emit("vote", candidates);

  socket.on("gandhi", (value) => {
    if (votedArray.includes(socket.id)) {
      socket.emit("alreadyVoted", "voted");
    } else {
      votedArray.push(socket.id);
      candidates.Gandhi += value;
      io.emit("vote", candidates);
    }
  });

  socket.on("modi", (value) => {
    if (votedArray.includes(socket.id)) {
      socket.emit("alreadyVoted", "voted");
    } else {
      votedArray.push(socket.id);
      candidates.Modi += value;
      io.emit("vote", candidates);
    }
  });

  socket.on("kejriwal", (value) => {
    if (votedArray.includes(socket.id)) {
      socket.emit("alreadyVoted", "voted");
    } else {
      votedArray.push(socket.id);
      candidates.Kejriwal += value;
      io.emit("vote", candidates);
    }
  });

  socket.on("akhilesh", (value) => {
    if (votedArray.includes(socket.id)) {
      socket.emit("alreadyVoted", "voted");
    } else {
      votedArray.push(socket.id);
      candidates.Akhilesh += value;
      io.emit("vote", candidates);
    }
  });
});
