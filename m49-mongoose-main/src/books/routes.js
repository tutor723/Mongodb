const { Router } = require("express")
const bookRouter = Router()

const { addBook , getAllBooks ,deleteAllBooks } = require("./controllers")



bookRouter.post("/books/addBook",addBook)
bookRouter.get("/books/getBooks",getAllBooks)

bookRouter.delete("/books/deletebooks/:title", deleteAllBooks)

module.exports = bookRouter