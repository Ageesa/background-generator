function newColor(){
    var colorNow=  getRandomColorChannel()
     document.body.style.backgroundColor = colorNow;
  document.getElementById(`msg`).innerHTML = colorNow;
}

function getRandomColorChannel() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = `rgb(${r},${g},${b})`;
    return bgColor
    }
