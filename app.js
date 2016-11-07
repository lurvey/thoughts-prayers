var express = require('express') // Hey we want to use express, our web host / routing system
var app = express(); // starts express running
var server = require('http').Server( app ) // start server instance on a port
var io = require('socket.io')(server) // use socket.io for realtime connections aka websockets

var port = process.env.port || 8000

server.listen(port, function(){ // setup a server on port 3000, do a callback when it started successfully
  console.log("server is started" + port)
})

app.use( express.static('public') ) // server out everything that is in the publick folder.

var storedPositions = [];

io.on('connection', function(socket){ // if socket.io see a new connection, do something with them..
  console.log(socket.id); // prints out the socket who connected (ie: all users + the projection)

io.emit('storedPositionsMessage', storedPositions)

  socket.on('addRectangle', function(data){ // look for any messages with 'addRectangle'
    console.log('addRectangle' + data); // log out the 'data' in this case you get true, but you could use this to get any arbitrary data you want. think position, color, etc.
    io.emit('projectionRectangle', data); // sends out a message to the projection to add a rect to the screen.
    storedPositions.push(data)
  })
})
