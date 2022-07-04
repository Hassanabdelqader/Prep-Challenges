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
    let max = -Infinity;
    
    for (let index = 0; index < arr.length; index++) {
        arr[index] >= max ? max = arr[index] : max = max;
        
    }

    return max;
}
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
    let sum = 0;
    arr.forEach((v)=>{
        typeof v == "number" ? sum+=v : sum+=0; 
    });
    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr)=>{

// FIRST SOLUATION

    /*
temp =[];
arr.forEach((v) => {temp.unshift(v)});
arr = temp;
return arr
    */
//Second Selcution 

let temp = new Array(arr.length);

for(let i = 0 , j = arr.length-1 ; i < arr.length ; i++ , j--){


}



//Second Soluation without create a temp Array
   
let j = arr.length - 1 ;
for(let i = 0 ; i < j ; i++ , j--){
   	
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
	}
    return arr;


}
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};