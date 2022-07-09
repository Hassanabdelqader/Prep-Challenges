"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  optional:
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
// Input: ['C#', 'JS', 'Ruby','Python']
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
 //there is many sol but this is the best one since no need to crearte new Array 
  for(let i = 0 , j = arr.length - 1 ; i<=j ; i++ , j-- ){
      let temp = arr[i]; 
      arr[i] = arr[j] ; 
      arr[j] = temp;
  }
   return arr;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Given the array consisting of 2n elements. Write a function that takes the
// array in the form [x1,x2,...,xn,y1,y2,...,yn] and return the array
// in in the form [x1,y1,x2,y2,...,xn,yn].
// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

const shuffleArray = (arr) => {
  // First Solution using temp Arr
  /*
    const temp = [];
        for(let i = 0 , j = arr.length/2 ; i < arr.length/2 ; i++,j++ ){
            temp.push(arr[i]);
            temp.push(arr[j]);
        }
    return temp;
*/

//Second sol without creating another arr        

let length = arr.length/2;
   
for(let x = 0 ; x < length ; x++ ){
    let temp = (arr[x]*10) + arr[length+x];
    arr[length+x] = temp;
}
let thirdItem = 0;
for(let i = 0,j = length ; i < length ; i++ , thirdItem+=2){
    let firstIndex = Math.floor(arr[j+i] / 10);
    let secondIndex = arr[j+i]%10;
    arr[thirdItem] = firstIndex;
    arr[thirdItem+1] = secondIndex;
    
}
return arr;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position
// moves to indices[i] in the shuffled string.
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

const shuffleString = (str, indicesArr) => {
  const len = str.length;
  const str2 = new Array(len);
  var j = 0;
  for(let i = 0; i < len; i++){
      str2[Number(indicesArr[j])] = str[i];
      j++;
  }
  return str2.join("");
};
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, shuffleArray, shuffleString };
