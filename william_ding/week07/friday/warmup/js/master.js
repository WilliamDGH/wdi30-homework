// class FlattenAndReverse {
//
//   constructor(arr) {
//     return this.arr = arr;
//   }
//
//   reverse() {
//     return this.arr.reverse();
//   }
//
//   flatten() {
//
//   }
// }

const flatten = arr => [].concat.apply([], arr);

const myReverse = function (arr) {
  const newArr = [];
  for (let i = (arr.length - 1); i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
