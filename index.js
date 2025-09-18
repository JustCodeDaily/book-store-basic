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
app.get('/books', (req, res) => {
    res.json(books); // Respond with the list of books in JSON format
})

// Get a specific book by ID
app.get('/books/:id', (req,res) => {
    // Converting Book ID from String to Integer
    const id = parseInt(req.params.id)

    // Finding the Book 
    const book = books.find((e) => e.id === id)

    if(isNaN(id)){
        return res
            .status(400)
            .json({error: "The Book ID should always be a number"})
    }
    if(!book) {
        return res  
            .status(404)
            .json({error: "Book Not Found"})
    }

    return res.json(book)
})



app.post('/books', (req, res) => {
    const {title, author} = req.body;
    if(!title || title === "") {
        return res
            .status(400)
            .json({error: "The Book Title cannot be empty"})
    }
    if(!author || author === "") {
        return res
            .status(400)
            .json({error: "The Author Name cannot be empty"})
    }

    const book = {id: books.length + 1, title, author}
    books.push(book);
    return res
        .status(200)
        .json({message: "Book added Successfully", book})

})

app.delete('/books/:id', (req,res) => {
    // Converting Book ID from String to Integer
    const id = parseInt(req.params.id)

    // Deleting the book
    const bookToDelete = books.findIndex((e) => e.id === id)

    if(isNaN(id) || bookToDelete < 0 ){
        return res
            .status(400)
            .json({error: "The Book ID should always be a number"})
    }
    books.splice(bookToDelete, 1)
    return res  
        .status(200)
        .json({message: "The Book has been deleted"})

})

// Start the server and listen on the defined port
app.listen(PORT, () => console.log("Server is running on Port " + PORT)); 