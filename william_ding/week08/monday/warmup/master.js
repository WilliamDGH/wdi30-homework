const pairwise = function (arr, num) {
  const indeces = [];
  arr.forEach(function (i) {
    arr.forEach(function (j) {
      if (i + j === num) {
        indeces.push(arr.indexOf(i), arr.indexOf(j));
        delete arr[arr.indexOf(i)] ,arr[arr.indexOf(j)];
      }
    });
  });

  const sum = indeces.reduce((a, b) => a + b, 0);
  console.log(sum);
}
