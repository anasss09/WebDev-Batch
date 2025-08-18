const express = require('express')
const { url } = require('inspector')
const app = express()
const path = require('path')
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs');
let tasks = ["Cricket", "Football", "Chess", "Ludo"]

app.get('/',(req,res) => {

    try{
        res.render('index', {
        name:"TODO LIST BY HANDLEBARS",
        tasks
    })
    } catch(err) {
        res.send(err);
    }
})

app.post('/todos',(req,res) => {
    try{
        let {task} = req.body
        tasks.push(task)
        res.redirect('/')
    }catch(err) {
        res.send(err)
    }
})

app.get('/inreaseTask',(req,res) => {
    let {task} = req.query
    let indx = tasks.indexOf(task)
                if(indx > 0 && indx <= tasks.length - 1) {
                    let temp = tasks[indx]
                    tasks[indx] = tasks[indx - 1]
                    tasks[indx - 1] = temp;
                }
    res.redirect('/')
})

app.get('/decreaseTask',(req,res) => {
    let {task} = req.query
    let indx = tasks.indexOf(task)
            if(indx >= 0 && indx < tasks.length - 1) {
                let temp = tasks[indx]
                tasks[indx] = tasks[indx + 1]
                tasks[indx + 1] = temp;
            }
    res.redirect('/')
})

app.get('/deleteTask',(req,res) => {
    let {task} = req.query
    tasks = tasks.filter(t => t != task)
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    
})