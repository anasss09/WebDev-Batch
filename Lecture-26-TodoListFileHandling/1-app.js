const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true}));
app.use(express.json())

let todos = ["Cricket", "Badminton", "Football", "Hockey"]

app.get('/todos', (req,res) => {
    res.send(todos)
})

app.post('/todos', (req,res) => {
    let {task} = req.body
    todos.unshift(task)
    res.redirect('/todos')
})

app.get('/delete', (req,res) => {
    let {task} = req.query
    todos = todos.filter(t => t !== task)
    res.redirect('/todo')
})

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
    
})