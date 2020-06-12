// Check if a number is a prime number /////////////////////////
const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  let divisor = 3;
  const numberSqrt = Math.sqrt(n);
  while (numberSqrt > divisor) {
    console.log('divisor: ', divisor);
    if (n % divisor === 0) {
      return false;
    } else divisor += 2;
  }
  return true;
};
