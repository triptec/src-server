var io = require('socket.io').listen(80);

io.sockets.on('connection', function (socket) {
  socket.join('justin bieber fans');
  socket.broadcast.to('justin bieber fans').emit('new fan');
  io.sockets.in('rammstein fans').emit('new non-fan');
});
