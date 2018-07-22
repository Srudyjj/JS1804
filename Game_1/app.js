'use strict'

const body = document.querySelector("body");
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
        
    if (topPx - elemHeight >= document.documentElement.clientHeight) {
      accumulator -= 10;
      score.innerHTML = accumulator; 
      destroyer(elem);
      clearInterval(stepInterval);       
    }
  }, 10);
}

function destroyer(mu) {
  body.removeChild(mu);  
};

function catcher(cart, cow) {
  const cartСoordinates = cart.getBoundingClientRect();
  const cowСoordinates = cow.getBoundingClientRect();
  const leftLimit = cartСoordinates.left - cowСoordinates.width/2;
  const rightLimit = cartСoordinates.right + cowСoordinates.width/2;
 
  if ((cowСoordinates.left >= leftLimit && cowСoordinates.right <= rightLimit) &&  cowСoordinates.bottom >= cartСoordinates.top ) {
    console.log("In the area");
    accumulator += 1;
    score.innerHTML = accumulator;   
  }
}

document.addEventListener("mousemove", function(e) {
  moverCart(e);  
})

setInterval(() => {
  creator();
}, 500)





