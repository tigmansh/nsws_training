const users = [];

const userjoined = (id,username,room) => {
    const user = {id,username,room};
    users.push(user);
    return user;
}

const currUser = (id) => {
    return users.find(user=> user.id === id);
}

const getUsers = (room) => {
return users.filter(user=>user.room===room);
}

const leave = (id) => {
    const ind = users.findIndex(user=> user.id===id);

    if(ind !== -1) {
        return users.splice(ind,1)[0];
    }
}
module.exports = {userjoined, currUser, getUsers, leave};