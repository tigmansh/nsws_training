// you can write your js code here

let myForm = document.getElementById("form");

let userData = JSON.parse(localStorage.getItem("book-list")) || [];

myForm.addEventListener("submit", showUser);

function showUser(e)
{
    e.preventDefault();
    let obj = {
        bookName:myForm.name.value,
        author:myForm.author.value,
        description:myForm.desc.value,
        Date:myForm.added.value,
        category:myForm.category.value,
        bookPrice:myForm.price.value, 
    }
    userData.push(obj);
    console.log(userData);

    localStorage.setItem("book-list", JSON.stringify(userData));
}