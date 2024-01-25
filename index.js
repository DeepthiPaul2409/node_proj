//const student = require("./student");
const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const mongoose =require("mongoose");

const taskControllers = require("./controller/taskController");

dotenv.config();
const app =express();
app.use(express.json());
 
app.post("/tasks",taskControllers.createTask);
app.get("/tasks",taskControllers.getTasks);
app.get("/tasks/:id",taskControllers.getTaskById);
app.patch("/tasks/:id",taskControllers.updateTask);            
app.delete("/tasks/:id",taskControllers.deleteTask);

app.get("/:id",(req,res)=>{
    res.status(200).json({
        message:"hello",
        id: req.params.id
    });
})

app.post("/",(req,res)=>{
    res.status(200).json(req.body);
})
mongoose.connect("mongodb+srv://deepthipaul2409:Deepthipaul24@cluster0.hw18vsy.mongodb.net/")
.then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(err);
})
app.listen(process.env.PORT,()=>{
    console.log("server running on",process.env.PORT);
})



// const server = http.createServer((req,res)=>{
//       res.writeHead(200,{"Content-type":"text/plain"});
//       res.end("hello world");

// });
// server.listen(process.env.PORT,()=>{
//     console.log("server is running on ",process.env.PORT);
// })




// student.getDetails();
// student.display();


// console.log("hello world");
// console.log("hi ");
