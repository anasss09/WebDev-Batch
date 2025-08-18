const express = require('express')
const app = express()
const PORT = 3000
const session = require('express-session')

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: true}))

app.use(session({
  secret: 'abcdshdbscahdscduvscbibcwsdbhv', // Random Key
  resave: false, // Do you want to resave the cookie if there are no changes in it
  saveUninitialized: true, // create the cookie irrespective of cookie is required or not
}))

app.post('/login', (req,res) => {
    let {username} = req.body
    req.session.cnt = 0
    req.session.username = username
    req.session.isAdmin = false
   
    res.redirect("/profile")
})

app.get('/login', (req, res, next) => {

    if(req.session.username) return res.redirect('/profile')
    res.render('login')
})

app.get('/profile', (req,res) => {
    
    if(!req.session.username)
        return res.redirect('/login')

    req.session.cnt++;
    res.render('profile', {
        username: req.session.username,
        cnt: req.session.cnt
    })
})

app.get('/admin', (req, res) => {
    if(!req.session.username) return res.redirect('/login')

    if(req.session.isAdmin) return res.render('admin') 
    res.redirect('/profile')
})

app.listen(PORT, (req,res) => {
    console.log(`localhost:${PORT}`);    
})