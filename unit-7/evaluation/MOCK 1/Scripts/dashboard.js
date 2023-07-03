let taskList = JSON.parse(localStorage.getItem("task-list")) || [];

let priorityList = JSON.parse(localStorage.getItem("priority-list")) || [];

let filter = document.getElementById("filter");

let total = document.getElementById("task-count");

let tbody = document.getElementById("tbody");

filter.addEventListener("change", filtering);

function filtering() {
  let value = filter.value;
  console.log(value);

  taskList = JSON.parse(localStorage.getItem("task-list"));

  if (value === "Low") {
    taskList = taskList.filter(
      (ele) => ele.priority == "low" || ele.priority == "Low"
    );
    show();
  } else if (value === "Medium") {
    taskList = taskList.filter(
      (ele) => ele.priority == "medium" || ele.priority == "Medium"
    );
    show();
  } else if (value === "High") {
    taskList = taskList.filter(
      (ele) => ele.priority == "high" || ele.priority == "High"
    );
    show();
  } else {
    taskList = JSON.parse(localStorage.getItem("task-list"));
    show();
  }
}

function show() {
  tbody.innerHTML = null;
  total.innerText = taskList.length;

  taskList.forEach((ele, ind) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    td1.innerText = ele.taskname;
    td2.innerText = ele.description;
    td3.innerText = ele.startDate;
    td4.innerText = ele.endDate;
    td5.innerText = ele.priority;
    td6.innerText = "Add";

    td6.addEventListener("click", () => {
      priorityList.push(ele);
      localStorage.setItem("priority-list", JSON.stringify(priorityList));
      taskList.splice(ind, 1);
      localStorage.setItem("task-list", JSON.stringify(taskList));
      show();
    });

    tr.append(td1, td2, td3, td4, td5, td6);
    tbody.append(tr);
  });
}

show();
