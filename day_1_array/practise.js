// Q1. You are given an array of integers n which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns new array with the squares of each no. sorted in ascending order.

const sortedSquareArray = (array) => {
  let newArray = new Array(array.length).fill(0);
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  for( let i=array.length-1 ; i >=0; i--) {
    const leftSquared = Math.pow(array[leftPointer], 2);
    const rightSquared = Math.pow(array[rightPointer], 2);
    if (leftSquared > rightSquared) {
      newArray[i] = leftSquared;
      leftPointer++;
    } else {
      newArray[i] = rightSquared;
      rightPointer--;
    }
  }
  return newArray;
};

let nums = [-2, -1, 0, 1, 2, 3];
// console.log(sortedSquareArray(nums));

// Q2. An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotonic increasing if all its elements from left to right are non decreasing. An array is monotone decreasing if all its elemnts from left to right are non-increasing. Given an integer array return true if the given array is monotonic or false otherwise.

const monotonicArray = (array) => {
  let firstPointer = array[0];
  let lastPointer = array[array.length-1];
  if (firstPointer === lastPointer) {
    for (let index = 0; index < array.length-1; index++) {
      if (array[index+1]!==array[index]) {
        return false;
      }
    }
  } else if (firstPointer < lastPointer) {
    for (let index = 0; index < array.length-1; index++) {
      if (array[index+1] < array[index]) {
        return false;
      }
    }
  } else {
    for (let index = 0; index < array.length-1; index++) {
      if (array[index+1] < array[index]) {
        return false;
      }
    }
  } 
  return true;
}

let monotonic = [1,1,1,1,2, 1];
console.log(monotonicArray(monotonic));
