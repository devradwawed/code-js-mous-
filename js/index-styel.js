var img = document.getElementById("myImg");




document.addEventListener("mousemove" , function (e) {
  var x = e.clientX ;
  var y = e.clientY;
  img.style.left =  x +"px"; 
  img.style.top =  y +"px"; 
})