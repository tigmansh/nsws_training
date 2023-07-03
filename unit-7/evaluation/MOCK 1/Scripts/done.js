let doneList = JSON.parse(localStorage.getItem("done-list")) || [];

let tbody = document.getElementById("tbody");

function show() {
    tbody.innerHTML = null;
  
    doneList.forEach((ele, ind) => {
      let tr = document.createElement("tr");
  
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
  
      td1.innerText = ele.taskname;
      td2.innerText = ele.description;
      td3.innerText = ele.startDate;
      td4.innerText = ele.endDate;
      td5.innerText = ele.priority;

      tr.append(td1, td2, td3, td4, td5);
      tbody.append(tr);
    });
  }
  
  show();
  