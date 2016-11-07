
var socket = io.connect('http://172.18.8.120:3000/'); // set up a place for us to connect to, and try to connect

socket.on('connect', function(data){ // when we are connected do something
  console.log("connected to the server" + socket.id); // log out out socket's id, some long number that is unique
});

socket.on('projectionRectangle', function(data){ // if we see a projectionRectangle message, then do some stuff
  console.log(data);
  // use jQuery to add a rect to the screen, notice the alternate  jQ syntax

  var randSpeed = Math.floor((Math.random() * 6) + 2);
  var randPos = Math.floor((Math.random() * 200) + -100);
  var randRing = Math.floor((Math.random() * 19) + 1);
  var randFont = Math.floor((Math.random() * 35) + 8);
  var randDelay = Math.floor((Math.random() * 3) + 0.1);
  var sounds = ["stuka1.wav", "stuka2.wav", "stuka3.wav", "stuka4.wav", "stuka5.wav", "stuka6.wav"];
  function randomSound() {
     return sounds[Math.floor(Math.random() * sounds.length)];
  }

//first make a div, change the css, then append the body. this is not possible with the 'normal' syntax because order of operations (with chained methods)
  $('<div class="sun"><div class="dot">🙏</div></div>').css({
    'animation-duration' : randSpeed + 's',
    'animation-delay' : randDelay,
    'position' : 'fixed',
    'top' : randPos,
    'font-size' : randFont,
  }).appendTo('.ring:nth-child(' + randRing + ')');
  $(document).ready(function () {
                var jetSound = document.createElement('audio');
                console.log('hi: ' + randomSound());
                jetSound.setAttribute('src', randomSound());
                jetSound.setAttribute('autoplay', 'autoplay');
                //audioElement.load()
                $.get();
                jetSound.addEventListener(".dot", function() {
                jetSound.play();

                }, true);
              });
  setTimeout(function() {
    $('.dot:first').remove();

  }, 7000);
});
