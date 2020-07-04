console.log('it works');

// code your solution in here

// Get access to the DOM

const main = document.getElementsById("post-list");
const span = document.getElementsByClassName("badge-light");
const title = document.getElementsByClassName("card-title");
const paragraph = document.getElementsByClassName("card-text");


// Modify the DOM
// 


function createNewPost() {
    let newPost = document.createElement('div');
    let titleOfNewPost = document.getElementById('new-post-title');
    let paragraphOfNewPost = document.getElementById("new-post-content");
    titleOfNewPost.textContent = "";
    paragraphOfNewPost.textContent = "";
    div = document.getElementsById("form-group");

    newPost.appendChild(titleOfNewPost);
    newPost.appendChild(paragraphOfNewPost);
    newPost.classList.add('post-items-list');
}


