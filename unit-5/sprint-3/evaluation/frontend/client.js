const form = document.getElementById("form");
const roomName = document.getElementById("roomName");
const userss = document.getElementById("users");
const chat = document.getElementById("chat");
const socket = io("http://localhost:7300", {transports: ["websocket"]});

const urlParams = new URLSearchParams(window.location.search);

const username = urlParams.get("username");
const room = urlParams.get("room");


socket.emit("room-join", ({username,room}));

socket.on("msg",(username,message) => {
    // console.log(message);
    appendMsg(username,message);
});

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    let msg = e.target.elements.msg.value;

    msg = msg.trim();
    if(!msg) {
        return false;
    }

    socket.emit("chat",msg);
    e.target.elements.msg.value = "";
    e.target.elements.msg.focus();
})

socket.on("roomUsers", ({room,users})=> {
roomName.innerText = room;
op(users);
})

function op(users){
    userss.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.innerText = user.username;
        userss.append(li);
    })
}


function appendMsg(username,message) {
    const div = document.createElement("div");
    // div.classList.add("message");
    const para = document.createElement("p");
    // para.classList.add("meta");

    const p = document.createElement("p");

    para.innerText = username;
    p.innerText = message

    div.append(para,p);
    chat.append(div);
}
