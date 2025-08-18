const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {

    // Second step
    socket.on('subscribeCpp', ({socketID}) => {
        socket.join('cpp')
        io.to("cpp").emit("newcppjoin", {
            msg: "User cpp Added successfully !!"
        });
    })

    socket.on('sendMsg', ({msg}) => {
        io.to('cpp').emit('msgrec', {
            msg
        })
    })
});

app.use(express.static(path.join(__dirname, 'public')))

httpServer.listen(PORT, () => {
    console.log(`localhost:${PORT}`);    
})