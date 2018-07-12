function fib(i) {  
  if ( i == 1 || i == 2 ) {
    return 1;    
  } else {
    return fib(i-1) + fib(i-2);
  }
}       




const n = 5 
for (let i = 1; i < n; i++) {
    console.log(fib(i))
  }
