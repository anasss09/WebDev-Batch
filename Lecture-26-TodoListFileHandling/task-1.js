const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended: true}));

let students = ["Abhishek", "Archna", "Varda", "Ishan"];
let teachers = ["Kartik", "Monu", "Sabeel", "Mosina"]

app.get('/students', (req,res) => {
    res.send(students)
})

app.post('/student', (req,res) => {
    let {name} = req.body
    // res.send(`Add new student ${name}`)    
    students.push(name)
    res.redirect('/students')
})

app.post('/student/remove', (req,res) => {
    let {name} = req.body
    students = students.filter(t => t !== name)
    res.redirect('/students');
})

app.get('/teachers', (req,res) => {
    res.send(teachers)
})

app.post('/teachers/update', (req,res) => {
    let {newName, oldName} = req.body
    let indx = teachers.indexOf(oldName);
    teachers[indx] = newName
    res.redirect('/teachers')


})

app.listen(PORT, (req, res) => {
    console.log(`localhost:${PORT}`);    
})