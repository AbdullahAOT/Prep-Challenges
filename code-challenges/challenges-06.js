'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  
const findMax = (arr)=>{
    let max;
    // write your code here
    max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
const array1 = [12, 32, 22, 45, 78, 12, 50]; // Example array
const result1 = findMax(array1); // Call the function with the array argument
console.log(result1); // Log the result to the console
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr)=>{
    let sum;
    // write your code here
    sum=0;
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i])==='number'){
            sum+=arr[i];
        }
    }
    return sum;
}
const array2 = [20, '234', 'car', 41, 20, 'chair']; // Example array
const result2 = sumNums(array2); // Call the function with the array argument
console.log(result2); // Log the result to the console
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr)=>{
    // write your code here
    let reverseArr=[];
    for(let i=arr.length-1;i>=0;i--){
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}
const array3 = ['C#', 'JS', 'Ruby','Python']; // Example array
const result3 = sumNums(array3); // Call the function with the array argument
console.log(result3); // Log the result to the console
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};