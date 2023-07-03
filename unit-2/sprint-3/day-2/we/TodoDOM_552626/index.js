let myForm = document.getElementById("form");
let tbody = document.querySelector("tbody");
let formData = JSON.parse(localStorage.getItem("userData"));
if (formData===null){
    formData = [];
}
myForm.addEventListener("submit", (e) => {
e.preventDefault();
let obj = {
    task: myForm.task.value,
    priority: myForm.priority.value,
};
formData.push(obj);
localStorage.setItem("userData", JSON.stringify(formData))
tbody.innerHTML = null;
formData.forEach((element,index) =>{
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerText = element.task;
    td2.innerText = element.priority;
    if(element.priority == "High"){
        td2.style.backgroundColor = "red";
    }
    else{
        td2.style.backgroundColor = "green";
    }
    tr.append(td1, td2);
    tbody.append(tr);
});
});
