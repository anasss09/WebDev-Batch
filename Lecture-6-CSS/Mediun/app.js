// const express = require('express')
// const app = express()
// const PORT = 3000
// const path = require('path')

// app.set('view engine', 'hbs');
// app.use(express.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname, 'public')))
// // app.use(express.json())

// let fullName ;

// app.get('/', (req,res) => {
//     res.render('index', {fullName})
// })

// app.post('/nameData', (req, res) => {
//     let fullName = req.body
//     res.send(fullName)
//     // console.log(name);
    
// })

// app.listen(PORT, () => {
//     console.log(`localhost:${PORT}`);
    
// })

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // ✅ enable JSON parsing for axios
app.use(express.static(path.join(__dirname, 'public')));

let fullName = null;

// Render index.hbs and pass fullName (string)
app.get('/', (req, res) => {
    res.render('index', { fullName });
});

// Accept name via AJAX and store it
app.post('/nameData', (req, res) => {
    fullName = req.body.name; // ✅ Just store the name string
    res.json({ name: fullName });
});

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
});
