const express = require('express');
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoute");
const bookRoute = require("./routes/bookRoute");
const productRoute = require("./routes/productRoute");

const cors = require('cors');

const app = express();

const port = 3000

app.use(cors());
app.use(express.json());

app.use("/auth", userRoute)

app.use("/books", bookRoute)

app.use("/product", productRoute)

const live_url = "mongodb+srv://nandutut2013:Israel123@cluster.b8wuy.mongodb.net/myStore?retryWrites=true&w=majority&appName=Cluster"
//"mongodb://localhost:27017/userAuth"

mongoose.connect(live_url)
.then(() => console.log("mongodb connected"))
.catch(err => console.error("Connection.error:", err));

app.listen(port, () => {
    console.log(`Server is running on port port 3000}`);
});

