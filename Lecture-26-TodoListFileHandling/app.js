const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.post('/submit-form', (req,res) => {
    console.log(req.body);
    res.send(req.body)
    
})


app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
    
})