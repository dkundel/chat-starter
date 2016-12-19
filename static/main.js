document.getElementById('chatForm').addEventListener('submit', sendMessage);

function sendMessage(e) {
  var message = document.getElementById('chatInput').value;
  addMessage(message, 'Me');
  e.preventDefault();
}

function addMessage(message, sender) {
  var msg = document.createElement('div');
  msg.className = 'message';
  if (sender === 'Me') {
    msg.className += ' me';
  }
  var sender = document.createElement('span');
  sender.innerText = sender;

  msg.innerText = message;
  msg.insertBefore(sender, msg.firstChild);
  
  document.querySelector('.messages').appendChild(msg);
}