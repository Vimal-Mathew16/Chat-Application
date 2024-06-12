const socket = io();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messagesDiv = document.getElementById('messages');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        socket.emit('sendMessage', messageInput.value);
        messageInput.value = '';
    });

    socket.on('receiveMessage', function(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messagesDiv.appendChild(messageElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
});
