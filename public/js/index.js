var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Andrew',
    text: 'Hey'
  });
});
socket.on('disconnect', function() {
  console.log('Disconneted from server');
});

socket.on('newEmail', function(email) {
  console.log('newEmail', email);
});

socket.on('newMessage', function(message){
  console.log('newMessage', message);
});
