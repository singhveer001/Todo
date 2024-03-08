const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin%401@cluster0.iqgca0i.mongodb.net/todos");

const todoSchema = new mongoose.Schema({
    title:string,
    description:string,
    completed:boolean
})

const todo = mongoose.model('todo',todoSchema);

module.exports = {
    todo
}