// 🔁 1. Loop Basics
// Print numbers from 1 to 10 using a for loop.
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// Print numbers from 10 down to 1 using a while loop.
// let i=10
// while(i>0){
//     console.log(i)
//     i--
// }

// Print numbers from 1 to 5 using a do...while loop.
// let i=1
// do{
//     console.log(i)
//     i++
// }while(i<=5);

// 🔁 2. Even, Odd, Multiples
// Print all even numbers from 1 to 50.
// for(let i=1;i<=50;i++){
//     if(i%2 ==0){
//         console.log(i)
//     }
// }


// Print all odd numbers between 20 and 50.
// for(let i=20;i<=50;i++){
//     if(i%2 !=0){
//         console.log(i)
//     }
// }

// Print all numbers divisible by 3 from 1 to 30.

// for(let i=1;i<=30;i++){
//     if(i%3 ==0){
//         console.log(i)
//     }
// }
// ➕ 3. Summation & Product
// Find the sum of numbers from 1 to 100.
// let sum=0
// for(let i=1;i<=100;i++){
//     sum+=i
// }
// console.log(sum)

// Find the product of numbers from 1 to 10.
// let mul=1
// for(let i=1;i<=10;i++){
//     mul=mul*i
// }
// console.log(mul)

// Find the sum of all even numbers between 1 and 50.
// let sum=0
// for(let i=1;i<=50;i++){
//     if(i%2==0){
//         sum+=i
//     }
// }
// console.log(sum)


// Find the sum of squares of numbers from 1 to 10.
// (i.e., 1² + 2² + ... + 10²)
// for(let i=1;i<=10;i++){
//     console.log('square',i,i*i)
// }

// 🧠 4. Conditionals Inside Loops
// Print numbers from 1 to 20, skip multiples of 4 using continue.
// for(let i=1;i<=20;i++){
//     if(i%4==0) continue;
//     else console.log(i)
// }

// Print numbers from 1 to 10, stop at 7 using break.
// for(let i=1;i<=10;i++){
//     if(i==7) break;
//     else console.log(i)
// }

// Count how many numbers between 1 and 100 are divisible by both 3 and 5.
// let count=0
// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         count++;
//     }
// }
// console.log(count)

// 🔂 5. Nested Loops (Without Patterns)
// Print all pairs (i, j) where i and j go from 1 to 3.
// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(i,',',j)
//     }
// }

// Find all combinations of (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4).
// for(let i=0;i<=5;i++){
//     for(let j=0;j<=5;j++){
//         if(i+j == 5){
//         console.log('a=',i,'b=',j)
//              }
//      }
//  }
// 🧮 6. Logic-Based Tasks
// Check if a given number is a prime number using a loop.
// let n=7
// let flag=true
// for(let i=2;i<=n/2;i++){
//     if(n%i==0) {
//         flag=false 
    
// }
// // break;
// }
// if(flag==true)
// console.log('prime Number')
// else console.log('Not a prime number')

// Print the factorial of a number (e.g., 6! = 720).
// let fact=1;
// for(let i=1;i<=5;i++){
//     fact*=i
// }
// console.log(fact)

// Print the reverse of a number using a loop (e.g., 123 → 321).
// let rev = 0;
// let num = 123456;
// let lastDigit;

// while(num != 0){
//   lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
//   num = Math.floor(num/10);
// }

// console.log("Reverse number : ",rev);


// Count the number of digits in a given number using a loop.
// let input =12345
// let count=0
// while(input!=0){
//     count++
//     input=Math.floor(input/10)

// }
// console.log(count)

// Check if a number is a palindrome (e.g., 121, 1331) using only number operations and loops.
// let rev = 0;
// let input =1331
// let num = 1331;
// let lastDigit;

// while(num != 0){
//   lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
//   num = Math.floor(num/10);
// }

// console.log("Reverse number : ",rev);
// if(input==rev){
//     console.log("The given Number is a palindrome")
// }
// else{
//     console.log("The given Number is not a palindrome")

// }