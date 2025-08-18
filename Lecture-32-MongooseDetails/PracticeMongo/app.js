const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const Student = require("./model/Student");
const Address = require('./model/Address')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/student", async (req, res) => {
	try {
		let { name, age, marks } = req.body;
		let Sdata = await Student.insertOne({
			name,
			age,
			marks,
		});

		res.send({
			msg: "Added Successfully",
			Student: Sdata,
		});
	} catch (err) {
		console.log(err);
	}
});

app.get("/student", async (req, res) => {
	try {
		// let { name, age, marks } = req.query;
		let Sdata = await Student.find();
        res.send({
            Student: Sdata
        })
	} catch (err) {
		console.log(err);
	}
});

app.post('/update',async (req,res) => {
    try{
        let {name, age, marks} = req.body
        let Sdata = await Student.updateOne({name}, {
            $set:{
                age,
                marks
            }
        })

        res.send({
            msg: "Updated Successfully",
            Student: Sdata
        })
    }catch(err) {
        console.log(err);        
    }
})

app.get('/join',async (req,res) => {
    try{
        let Sdata = await Student.find().populate('address_id')
        res.send({
            msg:"Joined Successfully",
            Student: Sdata
        })
    } catch(err) {
        console.log(err);        
    }
})

mongoose
	.connect("mongodb://127.0.0.1:27017/studentData")
	.then(() => {
		app.listen(PORT, () => {
			console.log(`localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
