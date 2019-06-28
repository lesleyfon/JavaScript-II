// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Notebook', 'Pencil', 'Gum', 'Notebook', 'yo-yo', 'Gum'];
//Given this problem: 

// function firstItem(arr, cb) {
// firstItem passes the first item of the given array to the callback function.
// }

// Potential Solution:

// Higher order function using "cb" as the call back
// function firstItem(arr, cb) {
//   return cb(arr[0]);
// }

// // Function invocation 
// firstItem(items, function(first) {
//   console.log(first)
// });




function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}
function getLengthcb(a) {
  return a
}

getLength(items, getLengthcb);



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  // let lastItem = cb(arr[length - 1]);

  return cb(arr[arr.length - 1]);
}
function lastCb(elem) {
  return elem;
}
console.log(last(items, lastCb))



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let add = x + y;
  return cb(add)
}
function sumCb(add) {
  return add;
};
console.log(sumNums(25, 21343, sumCb))



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let mul = x * y;
  return cb(mul)
}

function mulCb(a) {
  return a
}

console.log(multiplyNums(10, 23, mulCb))




function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let bool = list.includes(item)
  return cb(bool)
}
function cb(i) {
  return i
}
console.log(contains('Pencil', items, cb))
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let obj = {}
  let newArr = [...array]
  let nonDuplicate = []
  let duplicate = []
  for (let i = 0; i < newArr.length; i++) {
    if (obj.hasOwnProperty(newArr[i])) {
      duplicate.push(newArr[i])
      // return obj
    } else {
      console.log(i)
      obj[newArr[i]] = newArr[i];
      nonDuplicate.push(newArr[i])
    }
  }

  return cb(nonDuplicate)
}

function removeDuplicatesCb(arr){
  return arr
}

console.log(removeDuplicates(items, removeDuplicatesCb))

