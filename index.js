const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const app = express();

const port = 3000

app.use(express.json());

app.use("/auth", userRoutes)

app.use("/books", bookRoutes)

app.use("/product", productRoute)

//const live_Url = "mongodb+srv://nandutut2013:Israel123@cluster.b8wuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"
//"mongodb://localhost:27017/userAuth"

mongoose.connect("mongodb://localhost:27017/userAuth")
.then(() => console.log("mongodb connected"))
.catch(err => console.error("Connection.error:", err));

app.listen(port, () => {
    console.log(`Server is running on port port 3000}`);
});

