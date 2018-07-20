'use strict'

// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("DOM fully loaded and parsed");
// });

const body = document.querySelector("body");
console.log(body);

const cart = body.querySelector("#cart");
const cartWidth = cart.offsetWidth;
const cartHeight = cart.clientHeight;

const score = body.querySelector("#score");
let accumulator = 0;
score.innerHTML = accumulator;

// Cart
function moverCart(e) {
  if (document.documentElement.clientWidth - e.clientX > cart.offsetWidth) { 
    cart.style.left = e.clientX + "px";
  }; 
};

// Cow
function getRandomLeftPosition(elemWidth) {
  let x = Math.random() * (document.documentElement.clientWidth - elemWidth);
  return Math.floor(x);
};

function creator() {
  let cow = document.createElement("div");
  console.log(cow); 
  cow.classList.add("cow");
  body.appendChild(cow);
  moverCow(cow);
};

function moverCow(elem) {
  const elemWidth = elem.offsetWidth;
  const elemHeight = elem.clientHeight;
  const randomLeftPosition = getRandomLeftPosition(elemWidth);
  let topPx = 0;

  elem.style.left = randomLeftPosition + "px";

  const stepInterval = setInterval(() => {
    topPx = topPx + 5;
    elem.style.top = topPx + "px";
    catcher(cart ,elem);

        
    if (topPx - elemHeight >= document.documentElement.clientHeight - cartHeight) {
      accumulator += 1;
      score.innerHTML = accumulator; 
      destroyer(elem);
      clearInterval(stepInterval);
            
    } else if (topPx - elemHeight >= document.documentElement.clientHeight) {
      destroyer(elem);
      clearInterval(stepInterval);       
    }
      
  }, 100);
}



function destroyer(mu) {
  body.removeChild(mu);  
};

function catcher(cart, cow) {
  const cartСoordinates = cart.getBoundingClientRect();
  const cowСoordinates = cow.getBoundingClientRect();
  // console.log(cartСoordinates.left);
  // console.log(cartСoordinates.width);
  // console.log(cowСoordinates.left);
  // console.log(cowСoordinates.width);
  const leftLimit = cartСoordinates.left - cowСoordinates.width/2;
  const rightLimit = cartСoordinates.right + cowСoordinates.width/2;
  // console.log("Left limit" + leftLimit);
  // console.log("Right limit" + rightLimit);
  
  


  if ((cowСoordinates.left >= leftLimit && cowСoordinates.right <= rightLimit) &&  cowСoordinates.bottom >= cartСoordinates.top ) {
    console.log("In the area");
    accumulator += 1;
    score.innerHTML = accumulator;   
  } else {
    console.log("Out of area");
    
  }
  
   
}



document.addEventListener("mousemove", function(e) {
  moverCart(e);  
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
setInterval(creator(), 10);




