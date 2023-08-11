const { Router } = require("express")
const bookRouter = Router()

const { addBook } = require("./controllers")

bookRouter.post("/books/addBook",addBook)
bookRouter.get("/books/getBooks",getAllBooks)

bookRouter.post("/books/deletebooks", deleteAllBooks)

module.exports = bookRouter