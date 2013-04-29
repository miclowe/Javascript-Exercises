var img = document.getElementById("kittykat");
var pace = 2;

img.style.position = 'absolute';
img.style.left = '0px';

function walkRight() {
  var width = document.width - img.width;
  if (parseInt(img.style.left, 10) >= width || pace < 0) {
    return;
  }
  img.style.left = parseInt(img.style.left, 10) + pace + 'px';
}

var startBtn = document.getElementById('start');
startBtn.onclick = function() {setInterval(walkRight, 50);};

var fastBtn = document.getElementById('faster');
fastBtn.onclick = function() { pace += 5; };

var slowBtn = document.getElementById('slower');
slowBtn.onclick = function() { pace -= 5; };

var stopBtn = document.getElementById('stop');
stopBtn.onclick = function() { pace = 0; };
