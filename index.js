const express = require('express'); // Import Express framework
const app = express(); // Create an Express application
const PORT = 3000; // Define the port number

const books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger" }
];

app.use(express.json()); // Middleware to parse JSON bodies

// Define routes for handling book-related requests
app.get('/', (req, res) => {})
app.post('/', (req, res) => {})
app.delete('/', (req, res) => {}) 

// Start the server and listen on the defined port
app.listen(PORT, () => console.log("Server is running on Port " + PORT)); 