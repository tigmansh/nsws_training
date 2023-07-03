// Write code related to Deleted page here
let deletedTodos = JSON.parse(localStorage.getItem("deleted-todos")) || [];

let tbody = document.getElementById("tbody");

deletedTodos.forEach((ele,ind)=>{
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    td1.innerText = ele.name;
    td2.innerText = ele.desc;
    td3.innerText = ele.Adate;
    td4.innerText = ele.deadline;
    td5.innerText = ele.priority;
    td6.innerText = ele.status;

    tr.append(td1,td2,td3,td4,td5,td6);
    tbody.append(tr);

})