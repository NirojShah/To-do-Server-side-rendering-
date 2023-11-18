const express = require("express");
const taskRouter = require("./routes/taskRoutes1");
const cors = require("cors")

const methodOverride = require("method-override")

// app instance
let app = express()


// Register template engine
app.set("view engine","ejs")

// in-built middleware to process incoming json data
app.use(express.json())

// MIddleware to server Static files from public folder
app.use(express.static("public"))

// middleware to process form data

app.use(express.urlencoded({extended:true}))

// extended : true --> to parse the data which is comming from form


// we can only use get and post method in ssr to overcome this drawback we use this meddleware.
app.use(methodOverride("_method")) // _method is querystring key

app.use("/app/v1/tasks", taskRouter)

module.exports = app;