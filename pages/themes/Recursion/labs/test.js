// 1! = 1;
// 5! = 5*4!; // 120

function factorial(n){
  if (n == 1) {
      // f(1) = 1 => the END condition
      return 1;
  }else {
      // f(n) = n * f(n-1)
      return (n * factorial(n - 1));
  }
}

console.log( factorial(3) );