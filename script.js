console.log('it works');

// code your solution in here

// Get access to the DOM

const main = document.getElementsById("post-list");
const span = document.getElementsByClassName("badge-light");
const title = document.getElementsByClassName("card-title");
const paragraph = document.getElementsByClassName("card-text");



// Modify the DOM
 


function createNewPost() {
    let newPost = document.createElement('div');
    let titleOfNewPost = document.createElement("h5");
    let paragraphOfNewPost = document.createElement("p");
    let titleOfNewPost = document.getElementById('new-post-title');
    let title = titleOfNewPost.value;
    titleOfNewPost.innerHTML = title;
    document.newPost.appendChild(titleOfNewPost);
    document.getElementById('new-post-title').value = '';
    let paragraphOfNewPost = document.getElementById("new-post-content");
    div = document.getElementsById("form-group");

    newPost.appendChild(titleOfNewPost);
    newPost.appendChild(paragraphOfNewPost);
    newPost.classList.add('post-items-list');
}

document.getElementsById('text').addEventListener('click', handler);
document.getElementsById('new-post-title').addEventListener('click', ($event) => {
 newPost.textContent = $event.target.value;
})


