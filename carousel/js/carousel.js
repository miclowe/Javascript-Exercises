// Carousel image gallery
// This version requires images to be same width

var mainImg = document.getElementById('mainImg');
var imgArray = ["images/img_1.jpg",
              "images/img_2.jpg",
              "images/img_3.jpg",
              "images/img_4.jpg",
              "images/img_5.jpg",
              "images/img_6.jpg",
              "images/img_7.jpg",
              "images/img_8.jpg"];

var opacity;
var timer;
var imgIndex = 0;
mainImg.setAttribute('src', imgArray[imgIndex]);
var imgCounter = document.getElementById('imgCounter');
imgCounter.innerHTML = (imgIndex + 1) + " of " + imgArray.length;

function nextImage() {
  if (imgIndex >= imgArray.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex += 1;
  }
  console.log(imgIndex);
  fadeOut();
  mainImg.setAttribute('src', imgArray[imgIndex]);
  mainImg.style.opacity = 0;
  fadeIn();
  imgCounter.innerHTML = (imgIndex + 1) + " of " + (imgArray.length);
};

function prevImage(){
  if (imgIndex <= 0) {
    imgIndex = imgArray.length - 1;
  } else {
    imgIndex -= 1;
  };
  console.log(imgIndex);
  fadeOut();
  mainImg.setAttribute('src', imgArray[imgIndex]);
  mainImg.style.opacity = 0;
  fadeIn();
  imgCounter.innerHTML = (imgIndex + 1) + " of " + (imgArray.length);
};

function fadeOut() {
  opacity = 1;
  timerOut = setInterval(function(){
    opacity -= 0.02;
    setOpacity(opacity);
    console.log(opacity);
    if(opacity <= 0) {
      clearInterval(timerOut);
    }
  }, 15);
}

function fadeIn() {
  opacity = 0;
  timerIn = setInterval(function(){
    opacity += 0.02;
    setOpacity(opacity);
    console.log(opacity);
    if(opacity > 1) {
      clearInterval(timerIn);
    }
  }, 15);
}

// Cross-browser support
function setOpacity(level) {
  mainImg.style.opacity = level;
  mainImg.style.MozOpacity = level;
  mainImg.style.KhtmlOpacity = level;
  mainImg.style.filter = "alpha(opacity)=" + (level * 100) + ");";
}

var nextBtn = document.getElementById('next');
nextBtn.onclick = function() {nextImage()};

var prevBtn = document.getElementById('previous');
prevBtn.onclick = function() {prevImage()};

var fadeoutBtn = document.getElementById('fadeout');
fadeoutBtn.onclick = function() {fadeOut()};
