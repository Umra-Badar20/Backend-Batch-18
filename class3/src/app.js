import express from "express"
const app = express()
app.use(express.json())
const post = [{ id: 1, title: "Umra", desc: "Hello world" }, { id: 2, title: "Umra 1", desc: "Hello world 1" }, { id: 3, title: "Umra 2", desc: "Hello world 2" }]
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/posts', (req, res) => {
    res.send(post)
})
app.post('/posts', (req, res) => {
    post.push({id:post.length+1,...req.body})
    res.send({messgae:"Post created sucessfully"})
    console.log(req.body);
})
app.delete("/posts/:id",(req, res)=>{
    let index = post.findIndex(v => v.id===Number(req.params.id))
    post.splice(index,1)
    res.send({message:"Post deleted Successfully"})
})
app.put("/posts/:id",(req, res)=>{
    let index = post.findIndex(v => v.id===Number(req.params.id))
    post.splice(index,1,{id:Number(req.params.id),...req.body})
    res.send({message:"Post updated Successfully"})
})
export default app