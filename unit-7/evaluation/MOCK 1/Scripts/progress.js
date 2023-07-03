let priorityList = JSON.parse(localStorage.getItem("priority-list")) || [];

let doneList = JSON.parse(localStorage.getItem("done-list")) || [];

let tbody = document.getElementById("tbody");

function show() {
  tbody.innerHTML = null;

  priorityList.forEach((ele, ind) => {
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
      doneList.push(ele);
      localStorage.setItem("done-list", JSON.stringify(doneList));
      priorityList.splice(ind, 1);
      localStorage.setItem("priority-list", JSON.stringify(priorityList));
      show();
    });

    tr.append(td1, td2, td3, td4, td5, td6);
    tbody.append(tr);
  });
}

show();
