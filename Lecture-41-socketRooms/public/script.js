const socket = io()
const cppBtn = document.querySelector('.cppBtn')
const javaBtn = document.querySelector('.javaBtn')
const pythonBtn = document.querySelector('.pythonBtn')
const chatboxes = document.querySelectorAll('.chatbox')
const inputMsg = document.querySelector('.inputMsg')
const sendMsgBtn = document.querySelector('.sendMsgBtn')
const cppChat = document.querySelector('.cppChat')

cppBtn.addEventListener('click', (ev) => {
    const btnName = ev.target.innerText.toLowerCase()
    // console.log(btnName);
    chatboxes.forEach(chatbox => {
        if(chatbox.getAttribute('id') === btnName) {
            chatbox.classList.remove('hidden');
        } else {
            chatbox.classList.add('hidden')
        }
    }) 

    // First Step
    socket.emit('subscribeCpp', {
        socketID: socket.id
    })

    // Third Step
    socket.on('newcppjoin', ({msg}) => {
        console.log(msg);        
    })
})

sendMsgBtn.addEventListener('click', (ev) => {        
    const msg = inputMsg.value;
    inputMsg.value = ""
    socket.emit('sendMsg', {
        msg
    })
})

socket.on('msgrec', ({msg}) => {
    let li = document.createElement('li')
    li.classList.add('msgChatCpp')
    li.innerText = msg
    cppChat.appendChild(li)
})

javaBtn.addEventListener('click', (ev) => {
    const btnName = ev.target.innerText.toLowerCase()
    // console.log(btnName);
    chatboxes.forEach(chatbox => {
        if(chatbox.getAttribute('id') === btnName) {
            chatbox.classList.remove('hidden');
        } else {
            chatbox.classList.add('hidden')
        }
    }) 
})

pythonBtn.addEventListener('click', (ev) => {
    const btnName = ev.target.innerText.toLowerCase()
    // console.log(btnName);
    chatboxes.forEach(chatbox => {
        if(chatbox.getAttribute('id') === btnName) {
            chatbox.classList.remove('hidden');
        } else {
            chatbox.classList.add('hidden')
        }
    }) 
})