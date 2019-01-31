const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console
_(numbers).each( n => console.log(n) );

// Iterate through numbers and multiply each one of them by 5
const multiplyFive = _(numbers).map( n => n * 5 );
console.log(multiplyFive);

// Iterate through numbers and reduce it by adding them together
const sum = _(numbers).reduce( (a, b ) => a + b);
console.log(sum);

// Get an array of all of the people in people that have the username "E"
const usernameE = _(people).where( {"username" : "E"} );
console.log(usernameE);

// Find the first object in people that has the id of 3
const idThree = _(people).find( {"id" : 3} );
console.log(idThree);

// Find the first person who has an age of less than 50
const ageLessThan = _(people).find( function (obj) {
  if (obj.age < 50) {
    return obj;
  }
});
console.log(ageLessThan);

// Get an array of all of the people with an age of over 60
const ageOlderThan = _(people).filter( function (obj) {
  if (obj.age > 50) {
    return obj;
  }
});
console.log(ageOlderThan);

// Remove all of the people with an age less than 40
const lessThan40 = _(people).filter( function (obj) {
  if (obj.age >= 40) {
    return obj;
  }
});
console.log(lessThan40);
