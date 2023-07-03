// Write code related to Home page here 

// Why Parse ? Because Old Data Can't be Deleted.....

let userData = JSON.parse(localStorage.getItem("task-list")) || [];

let myForm = document.getElementById("form");

myForm.addEventListener("submit", showUser);

function showUser(e)
{
    e.preventDefault();
    
    // declaring object

    let obj = {

        // adding all values from form to obj.

        name:myForm.name.value,
        description:myForm.desc.value,
        startDate:myForm.start.value,
        endDate:myForm.end.value,
        priority:myForm.priority.value,
    };
    userData.push(obj);

    //adding array into local storage and converting into string

    localStorage.setItem("task-list", JSON.stringify(userData));

}