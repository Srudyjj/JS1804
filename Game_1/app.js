'use strict'

// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("DOM fully loaded and parsed");
// });


const cart = document.querySelector("#cart");
const cartWidth = cart.offsetWidth;

console.log(cart);
console.log(cartWidth);

function mover(e) {
  if (document.documentElement.clientWidth - e.clientX > cart.offsetWidth) { 
    cart.style.left = e.clientX + "px";
  }; 
};

function creator() {

};

function destroyer(params) {
  
}



document.addEventListener("mousemove", function(e) {
  mover(e);  
})
  // console.log(e.clientX);
  // console.log(document.documentElement.clientWidth);
  
  
  
  
  
  
  // console.log(e.clientY);



