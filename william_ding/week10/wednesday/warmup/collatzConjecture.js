const collatz = (n, s = 0) => {
  if (n === 1) {
    s++;
    return console.log(`n is now 1. Complete. It took ${s} steps`);
  } else if (n % 2 === 0) {
    s++;
    console.log(`n is now: ${n}. It took ${s} steps`)
    collatz((n / 2), s)
  } else if (n % 2 !== 0) {
    s++;
    console.log(`n is now: ${n}. It took ${s} steps`)
    collatz( (n * 3 + 1), s )
  }
}
