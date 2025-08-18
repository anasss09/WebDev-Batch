const express = require('express')
const isLoggin = require('./middleware/middleware')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use((req,res,next) => {
    res.send("Hii I am Generic Middleware");
    next()
})


app.get('/',isLoggin, (req,res) => {
    console.log("Get request")
    
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})