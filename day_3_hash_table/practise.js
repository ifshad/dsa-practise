// Q1. You are given an array of integers and onother integer targetValue. Write a function that will take these inputs and return the indices of the 2 integers in the array , that add upto the targetValue.
// Method 1: Brute Force Method
function indicesSum(array, targetValue) {
    for (let i = 0; i < array.length-1; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (targetValue === array[i] + array[j]) {
                return [i, j];
            }
        }
    }
    return [];
};

let nums = [1, 2, 3, 4, 5];
let target = 5;
// console.log(indicesSum(nums, target))

// Method 2:
function findIndicesSum(array, targetValue) {
    const hashTable = {};
    for (let i = 0; i < array.length; i++) {
        let neededValue = targetValue - array[i];
        if (neededValue in hashTable) {
            return [i, hashTable[neededValue]];
        } else {
            hashTable[array[i]] = i;
        };
    };
    return [];
}

// console.log(findIndicesSum(nums, target))