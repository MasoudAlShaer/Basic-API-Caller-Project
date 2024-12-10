/********* 3 GET Methods *********/

// Fetch all the posts
function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayData(data, "Posts"))
    .catch(error => console.error('Error:', error));
}

// Fetch a single post
function fetchSinglePost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => displayData(data, "Single Post"))
    .catch(error => console.error('Error:', error));
}

// Fetch all users
function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayData(data, "Users"))
    .catch(error => console.error('Error:', error));
}

/********* 3 POST Methods *********/

// Create a new post
function createPost() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'Hello, My first post is here...',
      body: 'Hello I am Masoud AlShaer, My first post is even prettier than the old one.',
      userId: 1
    })
  })
    .then(response => response.json())
    .then(data => displayData(data, "New Post"))
    .catch(error => console.error('Error:', error));
}

// Create a new comment
function createComment() {
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      postId: 1,
      name: 'Masoud AlShaer',
      email: 'masoud@gmail.com',
      body: 'Hello, Our dear teachers.'
    })
  })
    .then(response => response.json())
    .then(data => displayData(data, "New Comment"))
    .catch(error => console.error('Error:', error));
}

// Create a new user
function createUser() {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Masoud AlShaer',
      username: 'masoooud-alshaer',
      email: 'masoud@gmail.com'
    })
  })
    .then(response => response.json())
    .then(data => displayData(data, "New User"))
    .catch(error => console.error('Error:', error));
}

function displayData(data, title) {
  console.log(`Title: ${title}\n${JSON.stringify(data, null, 2)}`)
}