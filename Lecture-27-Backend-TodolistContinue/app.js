const express = require('express')
const path = require('path')
const Tasks = require('./controller/todos')
const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

let todos = ["Cricket", "Football", "Chess", "Ludo"]

app.get('/todos',async (req,res) => {

    try{
        let todo = await Tasks.getTodos()
        res.send(todo)
    } catch(err) {
        res.send(err);
    }
})

app.post('/todos', async(req,res) => {
    try{
        let {task} = req.body
        await Tasks.addTask(task)
        res.redirect('/todos')
    }catch(err) {
        res.send(err)
    }
})

app.get('/inreaseTask',async (req,res) => {
    let {task} = req.query
    await Tasks.increaseTask(task)
    res.redirect('/todos')
})

app.get('/decreaseTask',async (req,res) => {
    let {task} = req.query
    await Tasks.decreaseTask(task)
    res.redirect('/todos')
})

app.get('/deleteTask', async(req,res) => {
    let {task} = req.query
    await Tasks.deleteTask(task)
    res.redirect('/todos')
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})