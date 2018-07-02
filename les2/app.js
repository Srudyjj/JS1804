// function pow(a,n) {
//   let res = a**n;
//   return res;  
// }

function pow(a,n) {
  if (n <= 0) {
    return NaN;
  }else{
    let res = 1;
    for (let i = 1; i<=n; i++) {
      res *= a;
    }
    return res;
  }
}

console.log(pow(2,3));
