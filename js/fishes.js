setInterval(function(){
var container = document.getElementById('fishes');
var tmp = container.innerHTML;
container.innerHTML= tmp;
}, 35000 // length of the whole show in milliseconds
);