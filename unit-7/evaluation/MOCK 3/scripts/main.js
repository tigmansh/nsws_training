// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

bookCreateBtn.addEventListener("click", addBook);

function addBook() {
  let myBook = {
    title: bookTitleInput.value,
    author: bookAuthorInput.value,
    category: bookCategoryInput.value,
    image: bookImageInput.value,
    price: bookPriceInput.value,
  };

  fetch(`${baseServerURL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(myBook),
  })
    .then((res) => res.json())
    .then((data) => {
      booksData = [];
      getBooks();
    })
    .catch((err) => console.log(err));
}
// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Books Data
let booksData = [];

sortAtoZBtn.addEventListener("click", ()=> {
  mainSection.innerHTML = null;
  booksData = [];
  fetch(bookURL)
  .then((res) => res.json())
  .then((data) => {
    let cardList = document.createElement("div");
    cardList.setAttribute("class", "card-list");
    
    data.forEach((book) => {
      booksData.push(book);
    });
    
    booksData.sort((a, b) => {return a.price - b.price});

      booksData.forEach((book) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("data-id", `${book.id}`);

        card.innerHTML = `
    <div class="card-img">
    <img src=${book.image} alt="book">
    </div>
    <div class="card-body">
    <h4 class="card-title">${book.title}</h4>
    <p class="card-author">${book.author}</p>
    <p class="card-category">${book.category}</p>
    <p class="card-price">${book.price}</p>
    <a href="#" data-id=${book.id} class="card-link">Edit</a>
    <button data-id=${book.id} class="card-button">Delete</button>
    </div>
    `;
        cardList.append(card);
        mainSection.append(cardList);
      })
    })
    .catch((err) => console.log(err));

});


sortZtoABtn.addEventListener("click", ()=> {
  mainSection.innerHTML = null;
  booksData = [];
  fetch(bookURL)
  .then((res) => res.json())
  .then((data) => {
    let cardList = document.createElement("div");
    cardList.setAttribute("class", "card-list");
    
    data.forEach((book) => {
      booksData.push(book);
    });
    
    booksData.sort((a, b) => {return b.price - a.price});

      booksData.forEach((book) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("data-id", `${book.id}`);

        card.innerHTML = `
    <div class="card-img">
    <img src=${book.image} alt="book">
    </div>
    <div class="card-body">
    <h4 class="card-title">${book.title}</h4>
    <p class="card-author">${book.author}</p>
    <p class="card-category">${book.category}</p>
    <p class="card-price">${book.price}</p>
    <a href="#" data-id=${book.id} class="card-link">Edit</a>
    <button data-id=${book.id} class="card-button">Delete</button>
    </div>
    `;
        cardList.append(card);
        mainSection.append(cardList);
      })
    })
    .catch((err) => console.log(err));

});
function getBooks() {
  mainSection.innerHTML = null;

  function qqq() {
    // console.log("AAAAA");
    // fetch(`${baseServerURL}/books/${e.target.value}`)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  }

  fetch(bookURL)
    .then((res) => res.json())
    .then((data) => {
      let cardList = document.createElement("div");
      cardList.setAttribute("class", "card-list");

      data.forEach((book) => {
        booksData.push(book);
      });

      booksData.forEach((book) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("data-id", `${book.id}`);

        card.innerHTML = `
    <div class="card-img">
    <img src=${book.image} alt="book">
    </div>
    <div class="card-body">
    <h4 class="card-title">${book.title}</h4>
    <p class="card-author">${book.author}</p>
    <p class="card-category">${book.category}</p>
    <p class="card-price">${book.price}</p>
    <a href="#" data-id=${book.id} class="card-link">Edit</a>
    <button data-id=${book.id} class="card-button">Delete</button>
    </div>
    `;
        cardList.append(card);
        mainSection.append(cardList);
      })
    })
    .catch((err) => console.log(err));
}
window.addEventListener("load", getBooks);

// Delete book..

// let dltBtn = document.getElementsByClassName('card-button');
// console.log(dltBtn);

// for(const btn of dltBtn) {
// }
// dltBtn.addEventListener("click", dltBook);
