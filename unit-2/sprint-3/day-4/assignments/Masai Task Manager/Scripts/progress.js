// Write code for the Progress page here 

let priorityData = JSON.parse(localStorage.getItem("priority-list")) || [];

let tbody = document.getElementById("progress_tbody");

let doneData = JSON.parse(localStorage.getItem("done-list")) || [];

function userShow()
{
   tbody.innerHTML = null;

   priorityData.forEach((element,index) => 
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
         doneData.push(element);

         localStorage.setItem("done-list", JSON.stringify(doneData));
        
         priorityData.splice(index, 1);

         localStorage.setItem("priority-list", JSON.stringify(priorityData));

         userShow();

        });

       tr.append(td1,td2,td3,td4,td5,td6);
       tbody.append(tr);
    });

}

userShow();