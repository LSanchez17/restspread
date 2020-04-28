/*
Refactor this:
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
*/

const filterOutOdds = (...nums) => {
  return nums.map(num => num % 2 == 0);
}

/*
Write a function called findMin that accepts a variable number of arguments and 
returns the smallest argument.
Make sure to do this using the rest and spread operator.
*/

const findMin = (...miny) => {
  return Math.min(...miny);
}
console.log(findMin(10,100,234,455,4,5));

/*
Write a function called mergeObjects that accepts two objects and returns a new object which contains 
all the keys and values of the first object and second object.
*/

const mergeObjects = (ob1, ob2) => {
  return ({...ob1, ...ob2});
}
console.log(mergeObjects({a:1, b:2}, {c:3, d:4}))

/*
Write a function called doubleAndReturnArgs which accepts an 
array and a variable number of arguments. The function 
should return a new array with the original array values and 
all of additional arguments doubled.
*/

const doubleAndReturnsArgs = (arr, ...others) => {
  let newRays = others;
  newRays = newRays.map(a => a * 2);
  //console.log(newRays);
  return newRays = [...arr,...newRays];
}
console.log(doubleAndReturnsArgs([1,2,3], 10, 4));

/** remove a random element in the items array
and return an array without that item. */

const removeRandom = (...items) => {
  let random = (Math.random() * items.length -1);
  items.splice(random, 1);
  return items;
}
console.log(removeRandom(1,2,3,4,5));

/** Add every item in array2 to array1. */

const extend = (array1, array2) => {
  return [...array1,...array2];
}
console.log(extend([1,2,3],[4,5,6]));

/** Add a new key/val to an object. */

const addKeyVal = (obj, key, val) => {
  return {...obj, [key]: val};
}
console.log(addKeyVal({1: 'a'}, 2, 'b'));

/** Remove a key from an object. */

const removeKey = (obj, key) => {
  let newObj = {...obj};
  delete newObj[key];
  console.log(newObj);
  return newObj
}
removeKey({1: 'butt', 'tacos': 0}, 'tacos');

/** Combine two objects. */

const combine = (obj1, obj2) => {
  return {...obj1, ...obj2};
}
console.log(combine({1:'test'},{2:'pass'}));

/** Update an object, changing a key/value. */
const update = (obj, key, val) => {
   return {...obj, [key]: val};
}
console.log(update({1:'taco',2:'marlee',3:'dumb kids'},3,'GONE'))
console.log(update({1:'taco',2:'marlee',3:'dumb kids'}, 4, 'GONE'))