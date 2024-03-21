const submitButton = document.querySelector('#button');

//Grabbing the elements ftom the HTML and creating new vars
const usernameEl = document.getElementById('username')
const titleEl = document.getElementById('title')
const contentEl = document.getElementById('content')


//Creates the event listener for what the click does and the data
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
//Creates the object and gets each input value from the user
    const blogPost = { 
        username: usernameEl.value,
        title: titleEl.value,
        content: contentEl.value,
    }

//Parses the JSON data 
    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || []
  
//Pushes/adds the savedBlogs to blog post then stringify the localStorage info
    savedBlogs.push(blogPost);
    localStorage.setItem('blogs', JSON.stringify(savedBlogs));
    window.location.href = 'blog.html' ;

    });