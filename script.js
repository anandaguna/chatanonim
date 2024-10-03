let messages = [];

function loadMessages() {
    let messagesHtml = '';
    messages.forEach(msg => {
        messagesHtml += `<div><strong>${msg.name}</strong>: ${msg.text}</div>`;
    });
    $('#chat-messages').html(messagesHtml);
}

function sendMessage() {
    const message = $('#message').val();
    if (message.trim() === '') return;

    const anonymousName = 'Anonymous';
    messages.push({ name: anonymousName, text: message });
    $('#message').val('');
    loadMessages();
}

$(document).ready(function() {
    loadMessages();
});
