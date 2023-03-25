// js for Dev challenge 2 
document.addEventListener("click", function (event) {
  var image = new Image();
  image.src = "/Images/airplane-flying.png"; 
  image.width = 50;
  image.style.position = "absolute";
  image.style.left = event.pageX + "px";
  image.style.top = event.pageY + "px";
  document.body.appendChild(image);
});


