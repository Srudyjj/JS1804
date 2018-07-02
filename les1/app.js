console.log("Task 1");
let n = 5;
for (let i = 1; i <= n; i++) {
  console.log(i);
}

console.log("Task 2");
let k = 5;
for (let i = k; i > 0; i--) {
  console.log(i);
}

console.log("Task 3");
let j = 10;
let z = 3;
let res;
for (let i = 1; i <= j; i++) {
  res = z * i;
  console.log(z + '*' + i + '=' + res);
}

console.log("Task 4");

/* Вводим любое целое положительное число, 
а программа суммирует все числа от 1 до введенного числа. */

let clientNum = 100;

function sum(num) {
  if ( num > 0 && Number.isInteger(num) ) {
    let sum = 1;
    if (num == 1) {
      return sum;      
    }else{
      for (let i = 1; i <= num; i++) {
        sum += i;
      }
      return sum;
    } 
  }else{
    console.log("WTF?")
  }
}

console.log(sum(clientNum));
