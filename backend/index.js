const { todo } = require("./db");
const { createTodo, updateTodo } = require("./types");

const express = require("express");
const app = express();

app.use(express.json());

// creates a post endpoint for creating a todo
app.post('/todo',async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return ;
    }    
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg:"Todo created"
    })
})

// creates a get endpoint for getting a todo
app.get('/todos',async function(req,res){
    const todos =await todo.find({});
    // console.log(todos); // promise
    res.json({
        todos
    })
})

// creates a put endpoint for marking a specific todo as completed
app.put('/completed',async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})


app.listen(3000,function(){
    console.log("Server started at port 30000");
})