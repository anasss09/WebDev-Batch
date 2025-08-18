const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

let todos = ["Singing", "Dancing", "Reading", "Gaming"]

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.get('/addtask', (req, res) =>{
    let {task} = req.query
    if(!todos.includes(task)) {
        todos.push(task)
    }
    res.redirect('/todos')
})

app.get('/increase', (req,res) => {
    let {task} = req.query
    let indx = todos.indexOf(task)
    if(indx > 0 && indx <= todos.length - 1) {
        let temp = todos[indx]
        todos[indx] = todos[indx-1]
        todos[indx-1] = temp
    }
    res.redirect('/todos')
})

app.get('/decrease', (req,res) => {
    let {task} = req.query
    let indx = todos.indexOf(task)
    if(indx >= 0 && indx < todos.length - 1) {
        let temp = todos[indx]
        todos[indx] = todos[indx+1]
        todos[indx+1] = temp
    }
    res.redirect('/todos')
})

app.get('/delete', (req,res) => {
    let {task} = req.query
    todos = todos.filter(d=>d!=task)
    res.redirect('/todos')
})

app.use((req, res, next)=> {
    res.status(404).json ({
        msg: "Abe kya h ??",
        DesentMsg: "Error 404 Not found"
    })
})


app.listen(PORT, ()=> {
    console.log(`http//:localhost:${PORT}`);    
})