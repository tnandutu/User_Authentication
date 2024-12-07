const userController = require("../controller/userController")
const express = require("express")
 
const userRoute = express.Router()
 
// userRoutes.post("/new-user" , userController.createUser)
userRoute.post("/new-user" , userController.createUser)
userRoute.get("/get-all-users" , userController.getAllUsers)
userRoute.get("/get-one-user/:id" , userController.getOneById)
userRoute.get("/get-one-user-name" , userController.getOneByName)
userRoute.patch("/update-user/:id" , userController.updateUser)
userRoute.delete("/delete-user/:id" , userController.deleteUser)
userRoute.delete("/delete-user-name" , userController.getOneAndDelete)
module.exports = userRoute
 
 