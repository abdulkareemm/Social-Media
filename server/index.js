const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")


const UserRouter = require("./routes/User")
const PostRouter = require("./routes/Post")

const app = express()
mongoose.connect("mongodb://localhost:27017/Soical-Media");

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/api/users',UserRouter)
app.use("/api/posts", PostRouter);


app.listen(5000,()=>{
    console.log("runserver");
})
