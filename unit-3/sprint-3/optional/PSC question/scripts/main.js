// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;


// Click Event to get data of admin..

loginUserButton.addEventListener("click",function(){

  // Creating object with admin username and password..
  let adminObj = {
    username : loginUserUsername.value,
    password : loginUserPassword.value
  };

  // invoking fetchAdmin with adminObj object..

  fetchAdmin(adminObj);
});


// function to fetch Data of admin so that, he can access AuthToken & Id..
async function fetchAdmin(adminObj){
 
  try{
    let res = await fetch(userLoginURL,{
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(adminObj),
    });

    let data = await res.json();
    
    // Storing AuthToken & Id to LocalStorage..

    localStorage.setItem("localAccessToken", data.accessToken);
    localStorage.setItem("userId", +data.user.id);

    // Invoking greetAdmin function to show greeting message for admin..
    greetAdmin(adminObj.username);
  }
  catch(err){}
}

// Appending a welcome message on screen for admin using declaritive style..
function greetAdmin(name){
  notificationWrapper.innerHTML = 
  `<h5 class="notification info">
  hey ${name}, welcome back!
  </h5>`
}

getTodoButton.addEventListener("click", getTodoData)

 async function getTodoData(){
  let res = await fetch(urlAllTodosOfUser,{
        headers:{
          'Content-type':'application/json',
          Authorization:`Bearer ${userAuthToken}`,
        },
  });

  let data = await res.json();
  console.log(data);

  let todoData = data.map((item)=>{
    if(item.completed){
      return `<label><input class="todo-item-checkbox" data-id=${item.id} type="checkbox" checked="">${item.title}</label>`
    }
    else{
      return `<label><input class="todo-item-checkbox" data-id=${item.id} type="checkbox">${item.title}</label>`
    }
  });

  console.log(todoData);

  mainSection.innerHTML = 
  `<div id="todo-list-wrapper" class="todo-list-wrapper">
     ${todoData.join(" ")}
  </div>`;

  let toggled = document.querySelectorAll(".todo-item-checkbox");
  console.log(toggled);

  for(let val of toggled){
    val.addEventListener("click",()=>{
      patchRequest(val.dataset.id,val.checked)
    });
  }
}

async function patchRequest(id,status){
  console.log(id,status);

  let res = await fetch(urlTodosBase+id,{
    method : "PATCH",
    headers : {
      'Content-Type' : "application/json",
      Authorization : `Bearer ${userAuthToken}`
    },
    body : JSON.stringify({
      completed : status,
    })
  })
}