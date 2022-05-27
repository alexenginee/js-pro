const users = [
  {
    id: 1,
    username: "Michael Lawson",
    age: 22,
  },
  {
    id: 2,
    username: "Tom Spot",
    age: 32,
  },
  {
    id: 3,
    username: "Kate Ford",
    age: 18,
  },
];
console.log(users);

// pulled the age from the array
let userAge = [];
function getUserAge(array, newArray) {
  array.forEach((el) => {
    newArray.push(el.age);
  });
  return newArray;
}
getUserAge(users, userAge);

// Average Age
function getAverageAge(array) {
  let rezult = 0;
  let counter = 0;
  array.forEach((el) => {
    rezult += el;
    counter += 1;
  });
  return rezult / counter;
}
console.log(getAverageAge(userAge));

// Sort the array by age from largest to smallest

let ageSort = [...userAge];

function getSortArray(array) {
  array.sort((a, b) => {
    return b - a;
  });
}
getSortArray(ageSort);
console.log(ageSort);

///

let randomeAge = 25;
function getBullAge(array) {
  let count = 0;
  array.forEach((el) => {
    if (el == randomeAge) {
      count += 1;
    } else {
      count += 0;
    }
  });
  if (count > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(getBullAge(userAge));
