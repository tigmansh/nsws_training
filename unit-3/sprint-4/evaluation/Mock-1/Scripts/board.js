// Write code related to Board page here

let todoData = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todoData);

let deletedData = JSON.parse(localStorage.getItem("deleted")) || [];
let deleteItems = document.getElementById("delete")

let todocontainer = document.getElementById("todoContainer");
let data = []
for(let item of todoData){
    let card = `<div>
    <h3>${item.name}</h3>
    <p>${item.desc}</p>
    Added On:- <p>${item.addDate}</p>
    Deadline:- <p>${item.deadline}</p>
    Priority:- <p>${item.priority}</p>
    <select name=priority> 
    <option value=${item.status}>Todo</option>
    <option value=progress>Progress</option>
    <option value=stuck>Stuck</option>
    <option value=completed>Completed</option>
    </select>
    <button id="delete">Delete</button>
    </div>`
    console.log(card.delete)
    data.push(card)
    console.log(data)
    todocontainer.innerHTML = data.join(' ');
}

let changed =  document.querySelectorAll("select");

let progressContainer = document.getElementById("progressContainer");
let stuckContainer = document.getElementById("stuckContainer");
let completedContainer = document.getElementById("completedContainer")

for(let i=0;i<changed.length;i++){
    changed[i].addEventListener("change",function(){
        if(changed[i].value === "progress" || changed[i].value === "Progress"){
            progressContainer.innerHTML = data[i];
            data.splice(i,1);
            todocontainer.innerHTML = data.join(' ');
            
        }
        else if(changed[i].value === "stuck" || changed[i].value === "Stuck"){
            stuckContainer.innerHTML = data[i];
            data.splice(i,1);
            todocontainer.innerHTML = data.join(' ');
        }
        else if(changed[i].value === "completed" || changed[i].value === "Completed"){
            completedContainer.innerHTML = data[i];
            data.splice(i,1);
            todocontainer.innerHTML = data.join(' ');
        }
    })
}