const bookController = require("../controller/bookController")
const express = require("express")
 
const bookRoutes = express.Router()
 
// bookRoutes.post("/new-book" , userController.createBook)
bookRoutes.post("/new-book" , bookController.createbook)
bookRoutes.get("/get-one-by-name" ,bookController.getOneByName)
bookRoutes.patch("/update-book/:id" , bookController.updateBook)
bookRoutes.delete("/delete-book/:id" , bookController.deleteBook)
module.exports = bookRoutes;
 
 