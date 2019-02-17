const primeFactors = (num) => {
  const output = [];

  const checkFactors = (num, factor = 2) => {
    if (factor >= num) {
      return output.push(num);
    } else if (num % factor === 0) {
      output.push(factor);
      checkFactors(num / factor, factor);
    } else {
      checkFactors(num, factor + 1);
    }
  }

checkFactors(num);
console.log(output);
}


//
// const isPrime = function (num) {
//   for(let i = 2; i < num; i++)
//     if(num % i === 0) return false;
//   return true;
// }
