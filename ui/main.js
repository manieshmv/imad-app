console.log('Loaded!');
//moving the image on click
var img = document.getElementById('mani');
var marginLeft =0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
    
};