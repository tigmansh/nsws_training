// Write code related to Done page here

let tbody = document.getElementById("done_tbody");

let doneData = JSON.parse(localStorage.getItem("done-list")) || [];

function userShow()
{
//    tbody.innerHTML = null;

   doneData.forEach((element,index) => 
    {
     
        // taking each row.

     let tr = document.createElement("tr");

     // taking 6 columns in the particular table.

     let td1 = document.createElement("td");
     let td2 = document.createElement ("td");
     let td3 = document.createElement("td");
     let td4 = document.createElement("td");
     let td5 = document.createElement("td");
     
     //taking data from userData which is an array of object(element) and getting each value from that object. 

     td1.innerText = element.name;
     td2.innerText = element.description;
     td3.innerText = element.startDate;
     td4.innerText = element.endDate;
     td5.innerText = element.priority;
       tr.append(td1,td2,td3,td4,td5);
       tbody.append(tr);
    });

}

userShow();