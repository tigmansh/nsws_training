// Write code related to dashboard page here

//userData that is taking data from task-list local storage.

let userData = JSON.parse(localStorage.getItem("task-list")) || [];

//taking new 

let priorityData = JSON.parse(localStorage.getItem("priority-list")) || [];

let tbody = document.getElementById("dashboard_tbody");

let userCount = document.getElementById("task-count");

//adding change event to select tag in dashboard basically filtering.


let filter = document.getElementById("filter");

filter.addEventListener("change", filteritnow);

function filteritnow()
{
    let value = filter.value;
    userData = JSON.parse(localStorage.getItem("task-list"));
    if(value=="Low"){
        userData = userData.filter((element) => element.priority=="Low");
        userShow();
    }
    else if (value=="High"){
        userData = userData.filter((element) => element.priority=="High");
        userShow();
    }
    else if (value=="Medium"){
        userData = userData.filter((element) => element.priority=="Medium");
        userShow();
    }
    else{
        userData = JSON.parse(localStorage.getItem("task-list"));
        userShow();
    }
}


function userShow()
{
   tbody.innerHTML = null;

   userCount.innerText = userData.length;

 userData.forEach((element,index) => 
    {
     
        // taking each row.

     let tr = document.createElement("tr");

     // taking 6 columns in the particular table.

     let td1 = document.createElement("td");
     let td2 = document.createElement ("td");
     let td3 = document.createElement("td");
     let td4 = document.createElement("td");
     let td5 = document.createElement("td");
     let td6 = document.createElement("td");

     //taking data from userData which is an array of object(element) and getting each value from that object. 

     td1.innerText = element.name;
     td2.innerText = element.description;
     td3.innerText = element.startDate;
     td4.innerText = element.endDate;
     td5.innerText = element.priority;
     td6.innerText = "Add";

     td6.addEventListener("click",() => {
         priorityData.push(element);

         localStorage.setItem("priority-list", JSON.stringify(priorityData));
        
         userData.splice(index, 1);

         localStorage.setItem("task-list", JSON.stringify(userData));

         userShow();

        });

       tr.append(td1,td2,td3,td4,td5,td6);
       tbody.append(tr);
    });

}

userShow();