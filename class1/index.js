import express from 'express'

const app = express()
const PORT = 8000
let users = [{name:"Umra",email : "umra@gmail.com"},{name:"Badar",email : "badar@gmail.com"}]
app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.get("/users",(req,res)=>{
    res.send(users)
})

app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
})