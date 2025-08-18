const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
const Student = require('./model/Student')
const address = require('./model/address')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/student', async (req, res) => {
    try {
        let { name, age, marks, subject } = req.body
        let StudentData = await Student.create({ name, age, marks, subject })
        res.send({
            msg: "Added success",
            Student: StudentData
        })
    } catch(err) {
        console.log(err);        
    }
})

app.get('/student',async(req,res) => {
    let {limit, skip} = req.query
    let Sdata = await Student.find({}).skip(parseInt(skip)).limit(parseInt(limit)).populate('address_id')
    res.send({
        Student:Sdata
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/codingBlocks').then(() => {
    app.listen(PORT, () => {
        console.log(`localhost:${PORT}`)
    })
}).catch(err => {
    console.log(err);
})

