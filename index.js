const { createTodo, updateTodo } = require("./types");

const express = requireO("express");
const app = express();

app.use(express.json());

// creates a post endpoint for creating a todo
app.post('/todo',function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return ;
    }    
    // put it in mongodb
    
})

// creates a get endpoint for getting a todo
app.get('/todos',function(req,res){
    
})

// creates a put endpoint for marking a specific todo as completed
app.put('/completed',function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }
})


app.listen(3000,function(){
    console.log("Server started at port 30000");
})