// Q1. Rotate the array to the right by k-steps, k=non negative integer
// Given: [1,2,3,4,5,6], k=2
// Answer: [5,6,1,2,3]
const reverse = (array, start, end) => {
    while(start<end){
        [array[start],array[end]] = [array[end], array[start]];
        start++;
        end--;
    }
}
const rotateArray = (array, k) => {
    k = k % array.length;
    reverse(array, 0, array.length-1);
    reverse(array, 0, k-1);
    reverse(array, k, array.length-1);
    return array;
}

let array = [1,2,3,4,5,6,7,8,9]
// console.log(rotateArray(array, 3))

// Q2. You are given an integer array height and length of n. There are n vertical lines drawn such that the two endpoints of the i-th line are (i,0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water(depth will constant across containers). Return the area of container which can store the max amount of water.

const maxArea = (array) => {
    let area = 0;
    let i = 0;
    let j = array.length-1;
    while(i<j){
        let height = Math.min(array[i], array[j]);
        let newArea = height * (j-i);
        area = Math.max(newArea, area);
        if(array[i]<array[j]){
            i++;
        }
        else j--;
    } ;
    return area;
};

let nums = [1,5,6,3,4];
// console.log(maxArea(nums));