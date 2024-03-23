/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/


// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple");     //True
// console.log("apple" == "Apple");     //False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase()=="apple");    //True

// Numarical test
console.log("Numarical tests:");
console.log(10 > 5);         //True
console.log(2 < 1);          //False

//Test using "and" and "or" operator
console.log("Test with 'and' and 'or':");
// console.log(ture && false);    //false
console.log(true ,false);      //True

// test whether an item is in a array
let fruite = ["apple", "banana", "cherry"];
console.log(fruite.includes("apple"));       //True

// test whether an item is not in a array
console.log("Is 'mango' nat in fruites?");
console.log(!fruite.includes("mango"));         //True
