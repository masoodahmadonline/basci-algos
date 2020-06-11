// Check if a number is a prime number /////////////////////////
const isPrime = (n) => {
  let divisor = 2;
  while (n > divisor){
  console.log('divisor: ', divisor);
    if(n % divisor === 0) {
    	return false;
    } else if (divisor !== 2){
    	divisor+= 2;
    } else divisor ++;
  }
  return true;
};
