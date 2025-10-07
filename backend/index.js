const express = require("express")
const http = require("http")
const {Server} = require("socket.io")
const cors = require("cors")
const port = 3300

const app = express()
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
    }
})

app.use(cors())

io.on("connection",(socket)=>{
    console.log("New user connected",socket.id)
    
    socket.on("chatmessage",(data)=>{
        console.log("Message",data)
        const {username,message} = data
        io.emit("chatmessage",{username,message})
    })

    socket.on("username",(username)=>{
        console.log("Username is:",username)
        io.emit("username",username)
    })

   
})

io.on("disconnect",(socket)=>{
    console.log("User disconnected",socket.id)
})

app.get("/",(req,res)=>{
    res.json({msg:"Hello from backend"})
})

server.listen(port,()=>{
    console.log("Server is running...")
})