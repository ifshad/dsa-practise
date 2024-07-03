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

// Q2. 