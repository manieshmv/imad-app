console.log('Loaded!');
//moving the image on click
var img = document.getElementById('mani');
var marginleft =0;
function moveright() {
    marginLeft = marginLeft=10;
    img.styl.marginleft = marginleft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveright, 100);
    
};