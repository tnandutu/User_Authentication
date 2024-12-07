const bookController = require("../controller/bookController")
const express = require("express")
 
const bookRoute = express.Router()
 
// bookRoutes.post("/new-book" , userController.createBook)
bookRoute.post("/new-book" , bookController.createBooks)
bookRoute.get("/get-one-by-name" ,bookController.getOneByName)
bookRoute.patch("/update-book/:id" , bookController.updateBook)
bookRoute.delete("/delete-book/:id" , bookController.deleteBook)
module.exports = bookRoute;
 
 