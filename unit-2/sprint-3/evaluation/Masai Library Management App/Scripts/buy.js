// you can write your js code here

let buyData = JSON.parse(localStorage.getItem("buy-list")) || [];

let tbody = document.getElementById("buy_tbody");

function userShow()
{
    tbody.innerHTML = null;

    buyData.forEach((element,index)=>{
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        
        td1.innerText = element.bookName;
        td2.innerText = element.author;
        td3.innerText = element.description;
        td4.innerText = element.Date;
        td5.innerText = element. category;
        td6.innerText = element.bookPrice;

        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);
    })
}

userShow()