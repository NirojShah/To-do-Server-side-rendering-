const http = require("http")
const mongoose = require("mongoose")
const app = require("./app")
const dotenv = require("dotenv")

// dotenv.config({
//     path:"./.env"
// })


MONGODB_CLOUD = `mongodb+srv://nirajshah950:92ic8oHSXr1BkwqZ@todoapplication.mq2dffn.mongodb.net/?retryWrites=true&w=majority`
MONGODB_LOCAL= `mongodb://127.0.0.1:27017/ToDoTasks`
PORT=5000

// Connect to DB
// mongoose.connect("mongodb://127.0.0.1:27017/ToDoTasks").then(() => {
//     console.log("Connected to DB")
// }).catch((err) => {
//     console.log(err)
// })

// Connect to db atlas
// local
// cloud 



mongoose.connect(MONGODB_CLOUD).then(() => {
    // console.log("Connected to DB")
}).catch((err) => {
    console.log(err)
})
 

let server = http.createServer(app)

server.listen(PORT, (err) => {
    if (err) console.log(err)
    // console.log("SERVER RUNNING AT PORT NO : " + process.env.PORT)
})