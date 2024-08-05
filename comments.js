// Create web server
// Create a web server that listens for incoming requests on port 3000
// and responds with a comment from the comments array. If the array is empty, the server should respond with a 404 status code.

// Import the http module
const http = require('http');

// Array of comments
const comments = [
  { name: 'John', comment: 'Hello!' },
  { name: 'Jack', comment: 'Hi!' },
  { name: 'Joe', comment: 'Hey!' }
];

// Create a web server
const server = http.createServer((req, res) => {
  // Respond with a comment from the comments array
  if (comments.length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments[0]));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});