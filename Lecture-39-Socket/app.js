const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const server = http.createServer(app)
const socketio = require('socket.io')
const io = socketio(server)

let users = [];

// SERVER IS LISTNING
io.on('connection', (socket) => {
    socket.on('send-msg', (data) => {
        // console.log(data);
        
        io.emit('receive-msg', {
            msg: data.msg,
            username: users[socket.id]
        });
    })

    socket.on('login' ,(data) =>{
        users[socket.id] = data.username
    })
})

//Serving Static Server
app.use('/' , express.static(path.join(__dirname, 'public')))



const PORT = 8080;
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});