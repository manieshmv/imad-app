console.log('Loaded!');
//moving the image on click
var img = document.getElementById('mani');
var marginLeft =0;
function moveright() {
    marginLeft = marginLeft=10;
    img.styl.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveright, 100);
    
};