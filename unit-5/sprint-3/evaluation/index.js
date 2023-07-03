const express = require("express");
const socketio = require("socket.io");
const app = express();
app.use(express.json());
const { userjoined, currUser, getUsers, leave } = require("./utils/user");

const { format } = require("./utils/msg");

const http = require("http");
const httpServer = http.createServer(app);

const io = socketio(httpServer);

io.on("connection", (socket) => {
  console.log("user joined");

  socket.on("room-join", ({ username, room }) => {
    // console.log(username,room);
    const user = userjoined(socket.id, username, room);
    // console.log(user);
    socket.join(user.room);
    socket.broadcast
      .to(user.room)
      .emit("msg", `${username} has joined the chat room.`);
  });

  socket.on("chat", (msg) => {
    // console.log(msg);
    const user = currUser(socket.id);
    io.to(user.room).emit("msg", (user.username, msg));
  });

  socket.on("disconnect", () => {
    const user = leave(socket.id);
    console.log("user left");
    // socket.broadcast
    //   .to(user.room)
    //   .emit("msg", `${user.username} has left the chat`);
    // io.to(user.room).emit("roomUsers", {
    //   room: user.room,
    //   users: getUsers(user.room),
    // });
  });
});

httpServer.listen(7300, () => {
  console.log("Server is listening to port 7300");
});
