var socket = io.connect('http://172.18.8.120:3000/');  // connect to server

socket.on('connect', function(data){ // when connected, do something
  console.log("connected to the server" + socket.id); //log out id
});

  $('button').on('touchstart click', function(e){  // on click, do something

    console.log(e);

    // $('<div>🆒</div>').css({
    //   'position':'absolute',
    //   'top': e.clientY,
    //   'left': e.clientX,
    //
    // }).appendTo('body')

    var dataToSend = {
      'top': e.clientY,
      'left': e.clientX,
    };

    socket.emit('addRectangle', dataToSend); //send out a message of addRectangle to the server, it will handle the details (party planning)!
  });

  var defaultPrevent=function(e){e.preventDefault();}
document.body.parentElement.addEventListener("touchstart", defaultPrevent);
document.body.parentElement.addEventListener("touchmove" , defaultPrevent);
document.body.addEventListener("touchstart", defaultPrevent);
document.body.addEventListener("touchmove" , defaultPrevent);
