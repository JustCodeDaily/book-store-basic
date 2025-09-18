# 📚 Simple Book API (Node.js + Express)

This is a simple **RESTful API** built with **Node.js** and **Express** that allows you to manage a collection of books.  
It supports basic CRUD operations:  

- **GET** all books  
- **GET** a single book by ID  
- **POST** a new book  
- **DELETE** a book by ID  

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/book-api.git
cd book-api
```

### 2. Install Dependencies
Make sure you have **Node.js** installed. Then run:
```bash
npm install
```

### 3. Run the Server
```bash
node index.js
```

By default, the server runs on:
```
http://localhost:3000
```

---

## 📌 API Endpoints

### 1. Get All Books
```http
GET /books
```
**Response:**
```json
[
  { "id": 1, "title": "1984", "author": "George Orwell" },
  { "id": 2, "title": "To Kill a Mockingbird", "author": "Harper Lee" }
]
```

---

### 2. Get Book by ID
```http
GET /books/:id
```
Example:
```
GET /books/1
```
**Response:**
```json
{ "id": 1, "title": "1984", "author": "George Orwell" }
```

---

### 3. Add a New Book
```http
POST /books
```
**Request Body:**
```json
{
  "title": "New Book Title",
  "author": "Author Name"
}
```
**Response:**
```json
{
  "message": "Book added Successfully",
  "book": { "id": 5, "title": "New Book Title", "author": "Author Name" }
}
```

---

### 4. Delete a Book
```http
DELETE /books/:id
```
Example:
```
DELETE /books/2
```
**Response:**
```json
{ "message": "The Book has been deleted" }
```

---

## ⚠️ Error Handling
- Invalid book ID → `400 Bad Request`
- Book not found → `404 Not Found`
- Empty title or author → `400 Bad Request`

---

## 🛠️ Technologies Used
- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  

---

## 📖 Future Improvements
- Add **PUT / PATCH** to update a book  
- Store data in a database (e.g., MongoDB, PostgreSQL) instead of in-memory  
- Add authentication and validation  
