// 🧠 STRING QUESTIONS (5)

// 1. **Reverse a String**  
//    Write a function `reverseString(str)` that takes a string and returns it reversed.  
//    Example: `"hello" → "olleh"`
// function reverseString(str){
//     let a = []
//     for(let i=(str.length-1);i>=0;i--){
//        a.push(str[i])
//     }
//     let c=a.join('')
//     return c
// }
// let str='hello'
// let c=reverseString(str)
// console.log(c)


// 2. **Check Palindrome**  
//    Write a function `isPalindrome(str)` to check if a string is a palindrome (case-insensitive).  
//    Example: `"Madam" → true`
// function reverseString(str){
//         let a = []
//         for(let i=(str.length-1);i>=0;i--){
//            a.push(str[i])
//         }
//         let c=a.join('')
//         return c
//     }
// function isPalindrome(str){
//     let a=str.toUpperCase();
//     let b=reverseString(a);
//     if(a == b){
//         return true
//     }
// }
// let str='Madam'
// let x=isPalindrome(str)
// console.log(x)



// 3. **Count Vowels**  
//    Write a function `countVowels(str)` to count the number of vowels in the given string.  
//    Example: `"JavaScript" → 3`
// function countVowels(str){
//     let count =0
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a' || str[i]=='A' || str[i]=='e' || str[i]=='E' || str[i]=='i' || str[i]=='I' ||str[i]=='o' ||str[i]=='O' ||str[i]=='u' ||str[i]=='U'){
//             count++
//         }

//     }
//     return count

// }
// let str ="JavaScript"
// let a=countVowels(str)
// console.log(a)



// 4. **Capitalize First Letter of Each Word**  
//    Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a sentence.  
//    Example: `"hello world" → "Hello World"`
// function capitalizeWords(str){
//     let b=str.toLowerCase()
//     let a=b.split(' ')
//     // console.log(a)
//     let c= a.map(function(word){
//         return word[0].toUpperCase() + word.substr(1);
//     })
//     // console.log(c)
//     let d=c.join(' ')
//     return d
// } 
// let str='hello world'
// let ans=capitalizeWords(str)
// console.log(ans)



// 5. **Character Frequency**  
//    Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
//    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`



// 1. **Remove Duplicates**  
//    Write a function `removeDuplicates(arr)` that removes duplicate values from an array.  
//    Example: `[1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]`
// let arr=[1, 2, 2, 3, 4, 4]
// const newArr= arr.filter((v,i)=>{
//     return arr.indexOf(v) === i;
// })
// console.log(newArr)

// 2. **Flatten an Array**  
//    Write a function `flattenArray(arr)` to flatten a nested array (1 level deep).  
//    Example: `[[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]`
// let arr = [[1, 2], [3, 4], [5]]
// function flatten(arr){
//     let a=arr.join(' ')
//     for(let i=0;i<a.length;i++){
//          if(a[i]!=' ') return a
//          else a.join(' ')

//     }
//     return a
// }
// let c=flatten(arr)
// console.log(c)
// let a=arr.flat(Infinity)
// console.log(a)

// 3. **Find Max and Min**  
//    Write a function `findMaxMin(arr)` that returns the maximum and minimum number in an array.  
//    Example: `[4, 1, 9, -2] → { max: 9, min: -2 }`
// let arr =[4, 1, 9, -2]
//     let max1 = -Infinity
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max1) {
//             max1 = arr[i]
//         }
//     }
//     console.log('max:',max1)
//     console.log('min:',arr.reduce((pre,curr,arr)=>{
//         return pre<curr?pre:curr

//     },0))


// 4. **Sum of Even Numbers**
//    Write a function `sumEven(arr)` that returns the sum of all even numbers in the array.
//    Example: `[1, 2, 3, 4, 5, 6] → 12`
// let brr=[1, 2, 3, 4, 5, 6]
// console.log(brr.reduce((prev , curr,index)=>{
//     return index%2==0?prev+curr:prev

// },0))

// 5. **Group by Type**
//    Write a function `groupByType(arr)` that groups array elements by their type.
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`
// let arr = [1, 'a', true, 2, 'b']
// function groupByType(arr) {
//   return arr.reduce((acc, item) => {
//     const type = typeof item;
//     acc[type] = acc[type] || [];
//     acc[type].push(item);
//     return acc;
//   }, {});
// }
// let c = groupByType(arr)
// console.log(c)