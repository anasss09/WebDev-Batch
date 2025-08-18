const socket = io()

const login = document.querySelector('.login')
const chatApplication = document.querySelector('.chat-application')


document.querySelector('.login-btn').addEventListener('click', (ev) => {
    let username = document.querySelector('.username').value;
    // console.log(username);
    if(username.length > 0) {
        socket.emit('newuser', {
            socketId: socket.id,
            username: username
        })
    } else {
        alert('Please Enter correct username')
    }
    
})

socket.on('updatedetails', ({msg, clients, clientCount}) => {
    if(clientCount) {
        document.querySelector('.active-users').innerText = clientCount;
    }
    let allUsers = document.querySelector('.all-users-status')
    allUsers.innerText = ""
    clients.forEach(c => {
        if(c.id != socket.id) {
            let li = document.createElement('li')
            li.classList.add('online-users')
            li.innerText = c.name;
            allUsers.appendChild(li)
        }
    });
    
})

socket.on('useradded', ({msg, username, clients, clientCount}) => {   
    if(clientCount) {
        document.querySelector('.active-users').innerText = clientCount;
    }
    login.style.display = 'none';
    chatApplication.style.display = 'block'
    let currentUser = document.querySelector('.current-user')
    currentUser.innerText = username
})

document.querySelector('.send-message').addEventListener('click', (ev) => {
    let messageInput = document.querySelector('.message-input')
    let message = messageInput.value;
    if(message.length > 0 && message != ' ') {
        messageInput.value = '';
        socket.emit('newmessage', {
            message: message,
            socketId: socket.id
        })
    }
})

// socket.on('recievedmessage', ({message, socketId, username}) => {
//     let chats = document.querySelector('.chats');
//     let chat = document.createElement('div')
//     chat.classList.add('chat')
//     chat.innerText = message;
//     chats.append(chat)
// })

socket.on('recievedmessage', ({ message, socketId, username, clients, clientCount}) => {
    let chats = document.querySelector('.chats');
    let chat = document.createElement('div');
    document.querySelector('.active-users').innerText = clientCount;
    chat.classList.add('chat');
    // chat.innerHTML = `<div class="chat-message">${message}</div>`;
    let chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message');

    if (socketId === socket.id) {
        chatMessage.innerText = `${message}`;
        chatMessage.classList.add('my-chat');
    }
    else {
        chatMessage.innerText = `${username} : ${message}`;
        chatMessage.classList.add('another-chat');
    }
    chat.appendChild(chatMessage);
    chats.appendChild(chat);
})

socket.on('updateDetalsAll', ({ msg, clients, clientCount}) => {
    console.log(msg);
    if(clientCount) {
        document.querySelector('.active-users').innerText = clientCount;
    }
    let allUsers = document.querySelector('.all-users-status')
    allUsers.innerText = ""
    clients.forEach(c => {
        if(c.id != socket.id) {
            let li = document.createElement('li')
            li.classList.add('online-users')
            li.innerText = c.name;
            allUsers.appendChild(li)
        }
    });
    
    
})
