var add = document.querySelector(".buy");
var cart = document.querySelector(".cart");
var popup = document.querySelector(".popup")
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

add.onclick = function() {
  cart.className = "cart-full";
  popup.style.display = "block"
}

// When the user clicks on the button, open the modal
cart.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

var pay = document.querySelector(".pay");
var modal2 = document.getElementById("myModal2");
var span2 = document.getElementsByClassName("close2")[0];


// When the user clicks on the button, open the modal
pay.onclick = function() {
  modal.style.display = "none";
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
} 

var finish = document.querySelector(".finish");
var modal3 = document.getElementById("myModal3");
var span3 = document.getElementsByClassName("close3")[0];


// When the user clicks on the button, open the modal
finish.onclick = function() {
  modal2.style.display = "none";
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
} 

function preloadImage(url)
{
    var img=new Image();
    img.src= "https://www.dropbox.com/s/c2vgerwpnuijtop/cart-full.png?raw=1";
}