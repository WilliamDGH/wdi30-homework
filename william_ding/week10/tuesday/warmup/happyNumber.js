const happyNumber = () => {
  let number = 7;
  let calls = 0;
  let numberFound = 0;
  const output = [];

  const check = (num) => {
    calls += 1;
    let sum = 0;
    for (let i = 0; i < num.toString().length; i++) {
      sum += (num.toString()[i]) * (num.toString()[i])
    }
    if (calls > 100) return;
    if(sum === 1) {
      calls = 0;
      console.log(calls)
      return output.push(number);
    }
    check(sum)
  }

  do {
    output.push(number)
    number ++;
  } while (output.length < 10);

  console.log(output, calls);
}
