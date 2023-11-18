const Task = require("../models/Task.js")

const postTask = async (req, res) => {
    try {

        //--> Creating new instance of data and saving into db

        // const newTask = new Task({
        //     task:req.body.task
        // })
        // newTask.save()

        // OR

        //--> this method creates the instance by itself and saves the data into db

        let newTask = await Task.create({
            task: req.body.task
        })
        res.status(200).redirect("/app/v1/tasks")
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

const getTasks = async (req, res) => {
    try {
        let tasks = await Task.find()
        // render method is used to render the ejs file
        res.status(200).render("home.ejs",{tasks:tasks})
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).render("update.ejs",{task})
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

const updateTask = async (req, res) => {
    try {
        // const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body)

        // OR

        const {
            task
        } = req.body

        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            task: task
        })
        res.status(201).redirect("/app/v1/tasks")
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const selected = await Task.findOneAndDelete(req.params.id)
        res.status(201).redirect("/app/v1/tasks")
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}


module.exports = {
    postTask,
    updateTask,
    getTask,
    getTasks,
    deleteTask
}