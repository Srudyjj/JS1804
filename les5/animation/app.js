const ball = document.querySelector('img');
let opacity = 0;
let topPx = 0;
let left = 0;
let time = 0;

const x = setInterval(() => {
  opacity = opacity + 0.01;
  ball.style.opacity = opacity;
  
  if (opacity >= 1) {
    clearInterval(x);
    ball.style.opacity = 1;
  }
}, 50);

const y = setInterval(() => {
  topPx = topPx + 10;
  ball.style.top = topPx + "px";
}, 50);

setInterval(() => {
  topPx = 0;
}, 2000);


const t = setInterval(() => {
  time ++;
  console.log(time);
  if (time >= 30) {
    clearInterval(y);
    clearInterval(t);
    alert("Game over");
    location.reload();
  }
  
}, 1000);

ball.addEventListener('click', () => {
  alert("You catch me");
})





