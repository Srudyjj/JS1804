// Возведение в степечь любого целого положительного числа

// function powStandart(a,n) {
//   let res = a**n;
//   return res;  
// }

// function powLoop(a,n) {
//   if (n <= 0 || Number.isInteger(n)==false ) {
//     return NaN;
//   }else{
//     let res = 1;
//     for (let i = 1; i<=n; i++) {
//       res *= a;
//     }
//     return res;
//   }
// }

// function powRecursion(a,n) {
//   if (n <= 0 || Number.isInteger(n)==false ) {
//     return NaN;
//   }else{
//     let res = a 
//     if (n == 1) {
//       return res;
//     }else{
//       res = a * powRecursion(a,n - 1);    
//       return res;
//     }
//   }
// }

// console.log(powStandart(2,3));
// console.log(powLoop(2,2));
// console.log(powRecursion(2,5));


// Функция которая возвращвет сумму всех своих аргументов(числа)
function sumNumbers() {
  let sum = 0
  for (let i in arguments) {
    sum += arguments[i];
  }
  return sum;  
}

console.log(sumNumbers(1,2.6,-3));

// Объединяет строки
function sumStrings() {
  let sum = '';
  for (let i in arguments) {
    sum += arguments[i];
  }
  return sum;  
}

console.log(sumStrings('aaaaa','bbbbbbbb','cccccccc'));

