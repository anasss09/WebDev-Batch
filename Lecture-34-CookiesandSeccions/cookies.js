const express = require('express')
const app = express()
const PORT = 3000
const Cookies = require('cookies')

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: true}))
var keys = ['keyboard cat']

app.post('/login', (req,res) => {
    let {username} = req.body
    var cookies = new Cookies(req, res, { keys: keys })
    cookies.set('user', JSON.stringify({
        isAdmin: true,
        user: username
    }));
    res.redirect("/profile")
})

app.get('/login', (req, res, next) => {
    var cookies = new Cookies(req, res, { keys: keys })
    let data = cookies.get('user')
    
    if(!data)
        return res.render('login')
    res.redirect('/profile')
})

app.get('/profile', (req,res) => {
    var cookies = new Cookies(req, res, { keys: keys })
    //Read data
    let data = cookies.get('user')
    
    if(!data)
        return res.redirect('login')
    data = JSON.parse(data)
    console.log(data);
    
    res.render('profile', {
        username: data.user
    })
})

app.get('/admin', (req, res) => {
    var cookies = new Cookies(req, res, { keys: keys })
    let data = cookies.get('user')

    if(!data) return res.redirect('/login')

    data = JSON.parse(data)
    if(data.isAdmin) return res.render('admin') 
    res.redirect('/profile')
})

app.listen(PORT, (req,res) => {
    console.log(`localhost:${PORT}`);    
})