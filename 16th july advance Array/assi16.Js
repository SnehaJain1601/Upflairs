// How would you flatten a deeply nested array (e.g., [1, [2, [3, [4]], 5]]) to a single array using recursion or a built-in method?
// let arr=[1, [2, [3, [4]], 5]]
// function flatten(arr){
//     let a=arr.join(' ')
//     for(let i=0;i<a.length;i++){
//          if(a[i]!=' ') return a
//          else a.join(' ')

//     }
//     return a
// }
// let b=flatten(arr)
// console.log(b)
//By array method flatten
// let arr = [1, [2, [3, [4]], 5] ]

// let a=arr.flat(Infinity)
// console.log(a)


// Given an array of numbers, how do you remove all duplicate values without using Set?
// let arr=[1,2,4,5,1,7,4,6,2]
// const newArr= arr.filter((v,i)=>{
//     return arr.indexOf(v) === i;
// })
// console.log(newArr)


// What will be the output of the following?
// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a); // ? new element added to array a


// How would you find the second largest number in an array like [10, 5, 8, 1, 9] without sorting?
// let arr =[10, 5, 8, 1, 9]
// let max1 = -Infinity
// let max2 = -Infinity
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max1) {
//         max2 = max1
//        max1 = arr[i]
//     }
//     else if(arr[i] >max2 &&arr[i]<max1){
//         max2 = arr[i]
//     }
// }
// console.log(max2)


// How do you count the number of occurrences of each element in an array?
// Example: [1, 2, 2, 3, 1, 1] → {1: 3, 2: 2, 3: 1}
// const arr = [1, 2, 2, 3, 1, 1];

// const count = {};

// for (let num of arr) {
//   if (count[num]) {
//     count[num]++;
//   } else {
//     count[num] = 1;
//   }
// }

// console.log(count);



// Write a custom implementation of the .map() method (polyfill).
//Gives the new array and visits each array element one by one

// How do you sort an array of objects by multiple properties?
// Example: [{name: "John", age: 30}, {name: "Alice", age: 25}, {name: "John", age: 22}]
// Sort by name (alphabetical), then age (ascending)
// const people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "John", age: 22 }
// ];

// people.sort((a, b) => {
//   // First, compare by name
//   const nameCompare = a.name.localeCompare(b.name);
  
//   // If names are different, return that result
//   if (nameCompare !== 0) return nameCompare;
  
//   // If names are the same, compare by age
//   return a.age - b.age;
// });

// console.log(people);



// Given an array of numbers, return a new array containing only the elements that are prime numbers.
// let arr=[2,4,5,6,7,8,9]
// let newArr=arr.filter((val)=>
// {
//   return val%2 !=0
// });
// console.log(newArr)

// What will this code output and why?
// const arr = [1, 2, 3];
// arr.length = 0;
// console.log(arr[0]); // ?undefined


// What’s the difference between Array.prototype.forEach and Array.prototype.map in terms of return value and use-case?
//For each does not give new array whereas map gives the new array

// What is the result of this?
// const a = [1, 2, 3];
// const b = a.slice(0, 2);
// b[0] = 100;
// console.log(a); // ?[1,2,3]

// How do you find all pairs of elements in an array whose sum equals a target number?
// Example: [1, 2, 3, 4, 5], target = 6 → [[1,5], [2,4]]
// let arr=[1, 2, 3, 4, 5]
//  let target = 6
//  let brr =[]
// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]+arr[j]==target){
//       brr.push([arr[i],arr[j]])

//     }
//   }
// }
// console.log(brr)

// How would you chunk an array into groups of N elements?
// Example: [1,2,3,4,5,6], N = 2 → [[1,2], [3,4], [5,6]]
// let arr=[1,2,3,4,5,6]
// let N = 2 
// let b=[]
// for(let i=0;i<arr.length;i+=2){
//    b.push(arr.slice(i,i+2))
// }
// console.log(b)

// Explain what happens in this reduce expression:
// console.log([1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0))
//Sum is calculated of the given array which is 10


// What is the time complexity of Array.prototype.splice() in the worst case, and why?
// o(n)