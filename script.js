console.log('it works');

// code your solution in here

// Get access to the DOM

const main = document.getElementsById("post-list");
const span = document.getElementsByClassName("badge-light");
const title = document.getElementsByClassName("card-title");
const paragraph = document.getElementsByClassName("card-text")
const titleOfNewPost = document.getElementsByTagName('h5');
const paragraphOfNewPost = document.getElementsByTagName("p");
paragraphOfNewPost.textContent = "";
titleOfNewPost.textContent = "";

// Modify the DOM
// 
main.addEventListener('click', () =>{
  
})
