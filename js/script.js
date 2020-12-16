
function getRandomColorChannel() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = bgColor;
  document.getElementById(`msg`).innerHTML = bgColor;
}
    
    document.querySelector('button').addEventListener('click', getRandomColorChannel)