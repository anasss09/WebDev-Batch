const express = require('express')
const { mongoConnect, getDB } = require('./conntection/mongo')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())


// app.post('/createData',async (req,res) => {
//     let {name, age, marks} = req.body
//     let db = getDB()

//     let Student = db.collection('Student');
//     let Sdata = await Student.insertOne({
//         name,
//         age,
//         marks
//     })

//     res.send({
//         massage: "Inserted Successfully",
//         data: Sdata
//         })
// })
// Get Data
app.get('/retriveData',async (req,res) => {
    // let obj = req.query
    let db = getDB()
    let {limit, skip} = req.query
    limit = +limit
    skip = +skip
    let Student = db.collection('Student')

    let Sdata = await Student.find().limit(limit).skip(skip).toArray()

    res.send({
        data: Sdata
    })
})
// Create Data
app.post('/insertData',async (req,res) => {
    let {name, age, marks, subject} = req.body;
    let db = getDB()

    let Student = db.collection('Student')
    let Sdata = await Student.insertOne({
        name,
        age,
        marks,
        subject
    })

    res.send({
        massage: "Data Inserted Successfully",
        data: Sdata
    })
})

app.post('/updateData',async (req,res) => {
    let db = getDB();
    let {name, age, marks} = req.body

    let Student = db.collection('Student')
    let Sdata = await Student.updateOne({name}, {
        $set: {
            marks,
            age
        }
    })
    res.send({
        massage:"Updated Successfully",
        data: Sdata
    })
})

mongoConnect()
.then(() => {
        app.listen(PORT, () => {
        console.log(`localhost:${PORT}`);
    })
}).catch((err) => {
    console.log(`Error Occured !:${err}`);
})

