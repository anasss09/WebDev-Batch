const express = require('express')
const path = require('path');
const { Script } = require('vm');
const app = express();
const PORT = 3000

app.use(express.static(path.join(__dirname,'public')))

//req: localhost:3000
app.get('/', (req, res) => {
    res.send("Hello!! Am Anas!")
})

//req: localhost:3000/greetings
app.get('/greetings', (req,res) => {
    res.send("Hii !! How are You??");
})


//PARAMS req: /greet/Anas
app.get('/greet/:name', (req, res) => {
    console.log(req.params);
    res.send(`Aur kya haal h !! ${req.params.name}`);
    
})

//Query Parameters: http://localhost:3000/bye?name=ANAS&location=LONDON
app.get('/bye', (req,res)=> {
    res.send(`Chal Bhai milte h !! ${req.query.name} from ${req.query.location}`)
})

app.get('/home', (req, res)=> {
    res.sendFile(path.join(__dirname,'index.html'))
})

//to call script file
app.get('/script.js', (req,res) => {
    res.sendFile(path.join(__dirname, 'script.js'))
})

//Server
app.listen(PORT, ()=> {
    console.log(`http//:localhost:${PORT}`);
    
})