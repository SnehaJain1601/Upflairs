// 1. Even or Odd Checker
// Write a Node.js script that takes a number as input and determines whether the number is even or odd using if-else.
const prompt = require('prompt-sync')()
// let p =parseInt(prompt('enter the  number : -'))
// if(p%2 === 0){
//     console.log("The entered number is even")
// }
// else{
//     console.log("The entered number is odd")

// }
// 2. Positive, Negative, or Zero
// Ask the user to input a number. Use if-else conditions to display whether the number is positive, negative, or zero.
// let n = parseInt(prompt('enter the number to check whether it is positive ,negative or zero'))
// if (n > 0) {
//     console.log('Its is positive')
// }
// else if (n === 0) console.log('It is zero')
// else console.log('It is negative')

// 3. Age-based Eligibility
// Prompt the user to enter their age. Use if-else to check if the person is eligible to vote (18 or older). Display a suitable message.

// let age =parseInt(prompt('Enter the age'))
// if(age>=18) console.log('You can vote')
//     else if(age<18 && age>0) console.log('You can not vote')
// else console.log('Not entered the valid age')

// 4. Number Range Validator
// Ask the user to input a number. Use if-else to check whether the number lies within the range 10 to 20, inclusive. Display "In range" or "Out of range".
// let num=parseInt(prompt('Enter the number'))
// if(num>=10 &&num<=20) console.log('In range')
//     else console.log('Out of range')

// 5. Check Number Equality
// Take two numbers from the user. Use if-else to check if both numbers are equal or not. If they are not equal, indicate which one is larger.
// let first=parseInt(prompt('Enter the  first number'))
// let second=parseInt(prompt('Enter the  second number'))
// if(first == second) console.log("Both numbers are equal")
//     else if(first>second) console.log('First number is greater')
// else console.log('Second number is greater')

// 6. Simple Grading System
// Write a program that takes a score (0–100) as input and assigns a grade based on the following:

// 90 and above → Grade A

// 75–89 → Grade B

// 50–74 → Grade C

// Below 50 → Fail

// Use nested or chained if-else statements.

// let score=parseInt(prompt('Enter the score'))
// if(score>=90) console.log('Grade A')
//     else if(score>=75 && score<=89) console.log('Grade B')
//     else if(score>=50 && score<=74) console.log('Grade C ')
//     else  console.log('Fail')

// 7. Divisibility Checker (5 and 11)
// Prompt the user to input a number. Use if-else to check if it is divisible by both 5 and 11. Show a message based on the result.
// let divCheck=parseInt(prompt('Enter the number'))
// if(divCheck%5 ==0 && divCheck%11 ==0){
//     console.log('Number divisible by 5 and 11 both')
// }
// else console.log('Not divisible by both')

// 8. Find the Largest of Three Numbers
// Take three numbers as input. Use multiple if-else statements to find and print the largest number among them.
// let first=parseInt(prompt('Enter the  first number'))
// let second=parseInt(prompt('Enter the  second number'))
// let third=parseInt(prompt('Enter the  third number'))
// if(first>second){
//     if(first>third) console.log(first,'is greatest')
// }
// else if(second>third){
//     if(second>first) console.log(second,'is greatest')
// }
// else{
//     console.log(third,'is greatest')
// }


// 9. Leap Year Validator
// Ask the user to enter a year. Use conditions to check whether it is a leap year or not, using the correct logic:
// Leap year if divisible by 4, but not by 100, unless also divisible by 400.

// let leapYear=parseInt(prompt('Enter the year'))
// if(leapYear%4 == 0 && leapYear%10 != 0 ) console.log('Leap year')
//     else console.log('Not a leap year')

//10. Vowel or Consonant
// Take a single alphabet character as input from the user. Use if-else to check whether it's a vowel (a, e, i, o, u) or consonant.
// let alpha=prompt('Enter the alphabet')
// if(alpha=='a'|| alpha=='A' || alpha=='e' || alpha=='E' || alpha=='i' || alpha=='I' || alpha=='O' || alpha=='o'|| alpha=='u' || alpha=='U')
//     console.log('Entered the vowel')
// else console.log('Not a vowel')

