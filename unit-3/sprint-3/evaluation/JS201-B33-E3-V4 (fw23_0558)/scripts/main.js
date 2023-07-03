// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${ import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090 }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

// let baseServerURL = "http://127.0.0.1:9090/"

let catsData = [];
let recipesData = [];
let empData = [];
window.addEventListener("load", ()=>{
fetchingCats();
})

function renderCard(cardData){
    let list = ` <div class="data-list-wrapper id="data-list-wrapper">
    <div class="card-list">
       ${cardData.map((item) =>
        getCard(
          item.id,
          item.title,
          item.description,
          item.imageUrl,
          item.cost
        )
      )
      .join("")}
    </div>
    </div>
    `;
    mainSection.innerHTML = list;
    console.log(list);
}

function getCard(id,title,description,imageUrl,cost){
    let card = `
    <div class="card" data-id="${id}">
    <div class="card-image"><img src="${imageUrl}" alt="food"></div>
    <div class="card-body">
    <h3 class="card-item card-title">${title}</h3>
    <div class="card-item card-description">${description}</div>
    <div class="card-item card-additional-info">${cost}</div>
    </div>
    </div>
    `;
    return card
}

function fetchingCats(){
    fetch(`${baseServerURL}/cats`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);

            let obj = data.map((item)=>({
                id : item.id,
                title : item.name,
                description : item.description.substring(0,75),
                imageUrl : `${baseServerURL}${item.image}`,
                cost : item.cost,
            }));
            catsData = obj;
            renderCard(obj);
        })
}


sortAtoZBtn.addEventListener("click",()=>{
     if (catsData && catsData.length)
     {
        catsData.sort((a,b)=> a.cost - b.cost)
        renderCard(catsData)
      } 
      
      else
      {
        console.log("I Hate Cats !")
      }
    })

    sortZtoABtn.addEventListener("click",()=>{
        if(catsData && catsData.length)
        {
            catsData.sort((a,b)=> b.cost - a.cost)
            renderCard(catsData)
        }

        else
        {
         console.log("I Hate Cats !")
        }
    })

    filterLessThan50Btn.addEventListener("click",()=>{
        let filtered = [];
        for(let obj of catsData){
            if(obj.cost < 50){
            filtered.push(obj);
            }
        }
        renderCard(filtered);
    })

    filterMoreThanEqual50Btn.addEventListener("click",()=>{
        let filtered = [];
        for(let obj of catsData){
            if(obj.cost >= 50){
            filtered.push(obj);
            }
        }
        renderCard(filtered);
    })

    fetchRecipesBtn.addEventListener("click",()=>{
        async function fetchingRecipes(){
            fetch(`${baseServerURL}/recipes?_limit=25&&page=1`)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);

                let obj = data.map((item)=>({
                    id : item.id,
                    title : item.name,
                    imageUrl : `${baseServerURL}${item.image}`,
                    price : item.price,
                }));
                recipesData = obj;
                renderReciepes(obj);
            })
        }

        fetchingRecipes()
    })

    function renderReciepes(cardData){
        let list = `<div class="data-list-wrapper id="data-list-wrapper">
        <div class="card-list">
        ${cardData.map((item)=>
            getreciepes(
                item.id,
                item.title,
                item.imageUrl,
                item.price
            )
            ).join(" ")}
        </div>
        </div>
        `;
        mainSection.innerHTML = list;
    }

    function getreciepes(id,title,imageUrl,price){
        let card = `
        <div class="card" data-id="${id}">
        <div class="card-image"><img src="${imageUrl}" alt="food"></div>
        <div class="card-body">
        <h3 class="card-item card-title">${title}</h3>
        <div class="card-item card-description">Rs. ${price}</div>
        </div>
        </div>
        `;
        return card
    }


    fetchEmployeesBtn.addEventListener("click",()=>{
        async function fetchingRecipes(){
            fetch(`${baseServerURL}/employees`)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);

                let obj = data.map((item)=>({
                    id : item.id,
                    name : item.name,
                    imageUrl : `${baseServerURL}${item.image}`,
                    price : item.salary,
                }));
                empData = obj;
                renderEmp(obj);
            })
        }

        fetchingRecipes()
    })

    function renderEmp(cardData){
        let list = `<div class="columns eight main"><div class="notification-wrapper" id="notification-wrapper"></div>
        <div class="data-list-wrapper id="data-list-wrapper">
        <div class="card-list">
        ${cardData.map((item)=>
            getEmp(
                item.id,
                item.name,
                item.imageUrl,
                item.price
            )
            ).join(" ")}
        </div>
        </div>
        </div>
        `;
        mainSection.innerHTML = list;
        let greetBtn = document.querySelectorAll(".card-link")

        for(let item of greetBtn){
            item.addEventListener("click",()=>{
                alert(`Greetings from ${item.dataset.name}!`)
            })
        }
    }

    function getEmp(id,name,imageUrl,price){
        let card = `
        <div class="card" data-id="${id}">
        <div class="card-image"><img src="${imageUrl}" alt="food"></div>
        <div class="card-body">
        <h3 class="card-item card-title">${name}</h3>
        <div class="card-item card-description">Rs. ${price}</div>
        <a href="#" data-id=${id} data-name=${name} langtry class="card-item card-link">Greet</a>
        </div>
        </div>
        `;
        return card
    }