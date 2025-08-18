const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const mongoose = require('mongoose')
const hbs = require('hbs');

const User = require('./model/user')
//User Details
app.use(async (req, res, next) => {
    let user = await User.findOne({
        _id: '6888710c60261ed1673e7752'
    })
    req.user = user
    next()
})

//Middlewares
app.use(express.urlencoded({extended: true}))
hbs.registerPartials(path.join(__dirname + '/views/partials'));
app.set('view engine', 'hbs');
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

// Render Front Page
const homeRouter = require('./router/home')
app.get('/', homeRouter)

const adminRouter = require('./router/admin')
app.use('/admin', adminRouter)

const shopController = require('./router/shop')
app.use('/shop', shopController);

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce').then(() => {
    app.listen(PORT, () => {
        console.log(`localhost:${PORT}`);        
    })
})
.catch(err => {
    console.log(err);        
})