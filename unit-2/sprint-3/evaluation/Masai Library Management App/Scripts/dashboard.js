// you can write your js code here

let userData = JSON.parse(localStorage.getItem("book-list")) || [];

let buyData = JSON.parse(localStorage.getItem("buy-list")) || [];

let bookMark = JSON.parse(localStorage.getItem("bookmark-list")) || [];

let tbody = document.getElementById("dashboard_tbody");

let bookCount = document.getElementById("book-count");

let filter = document.getElementById("filter");

filter.addEventListener("change",filteritnow);

function filteritnow()
{
    let value = filter.value;
    
    userData = JSON.parse(localStorage.getItem("book-list"));

    if (value=="Fiction"){
        userData = userData.filter((element) => element.category=="Fiction");
        userShow();
    }
    else if (value=="Self Help"){
        userData = userData.filter((element) => element.category=="Self Help");
        userShow();
    }
    else if (value=="Finance"){
        userData = userData.filter((element) => element.category=="Finance");
        userShow();
    }
    else{
        userData = JSON.parse(localStorage.getItem("book-list"));
        userShow();
    }
}

function userShow()
{
    tbody.innerHTML = null;
    bookCount.innerText = userData.length;

    userData.forEach((element,index)=>{
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        
        td1.innerText = element.bookName;
        td2.innerText = element.author;
        td3.innerText = element.description;
        td4.innerText = element.Date;
        td5.innerText = element. category;
        td6.innerText = "Buy";
        td7.innerText = "Add";
        td8.innerText = element.bookPrice;

        td6.addEventListener("click", ()=>{
            buyData.push(element);
            
            localStorage.setItem("buy-list", JSON.stringify(buyData));

            userData.splice(index,1);

            localStorage.setItem("book-list", JSON.stringify(userData));

            userShow();

        });

        td7.addEventListener("click", ()=>{
            bookMark.push(element);
            
            localStorage.setItem("bookmark-list", JSON.stringify(bookMark));

            userData.splice(index,1);

            localStorage.setItem("book-list", JSON.stringify(userData));

            userShow();
            
        });

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr);
    })
}

userShow()