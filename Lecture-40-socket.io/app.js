const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000
const { createServer } = require("http");
const httpServer = createServer(app);
const { Server } = require("socket.io");
const io = new Server(httpServer, { /* options */ });


app.use( '/', express.static(path.join(__dirname, 'public')))

let userMap = {}

io.on("connection", (socket) => {
    // console.log("ClientID",io.sockets);
    // console.log("Client Count", io.engine.clientsCount)
    // io.sockets.sockets.forEach(c => console.log(c.id))
    socket.on('newuser', async ({username, socketId}) => {

        userMap[socketId] = username;
        let clients = [];
        let sockets = await io.fetchSockets();
        sockets.forEach(socket=>{
            if(userMap[socket.id]){
                clients.push({id: socket.id,name: userMap[socket.id]});
            }
        })
        socket.emit('useradded', {
            msg: "Added Successfully",
            username: userMap[socketId],
            clients,
            clientCount: clients.length
        })

        socket.broadcast.emit('updatedetails', {
            msg: "New user are added!",
            clients,
            clientCount: clients.length
        })
        
        
    })  

    socket.on('newmessage', async ({message, socketId}) => {

        let clients = []
        // io.sockets.sockets.forEach(client => clients.push({
        //     name: userMap[client.id],
        //     id: client.id
        // }))

        let sockets = await io.fetchSockets()
        let newUserMap = {}
        sockets.forEach(socket => {
            if(userMap[socket.id]) {
                newUserMap[socket.id] = userMap[socket.id]
                clients.push({id: socket.id, name: userMap[socket.id]})
            }
        })

        userMap = newUserMap;

        io.emit('recievedmessage', {
            message: message,
            socketId: socketId,
            username: userMap[socketId],
            clients,
            clientCount: io.engine.clientsCount
        })
    })

    socket.on('disconnect', async () => {
        let clients = [];
        let sockets = await io.fetchSockets();
        let newUserMap = {}
        sockets.forEach(socket=>{
            if(userMap[socket.id]){
                newUserMap[socket.id] = userMap[socket.id]
                clients.push({id: socket.id,name: userMap[socket.id]});
            }
        })

        userMap = newUserMap;
        io.emit('updateDetalsAll', {
            msg: "A user left the chat",
            clients,
            clientCount: io.engine.clientsCount
        })
    })
});

httpServer.listen(PORT, () => {
    console.log(`http://localhost: ${PORT}`);
})