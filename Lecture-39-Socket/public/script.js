const socket = io()

$('#chat-box').hide()

$('#send-btn').on('click', () => {
    const msgText = $('#inp').val();

    socket.emit('send-msg', {msg: msgText} )
    $('#inp').val("");
})

socket.on('receive-msg', (data) => {    
    $('#chat').append(`<li class="border p-2 ms-0 mb-2 rounded-pill"><span class="fw-bold">${data.username}: ${data.msg}</span></li>`)
})

$('#login-btn').on('click', () => {
    const username = $('#username').val();

    socket.emit('login', {username: username} )

    $('#login-page').hide();
    $('#chat-box').show();

    $('#username').val("");
})
