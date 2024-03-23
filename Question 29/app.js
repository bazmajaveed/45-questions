/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
var favorite_fruits = ["apples", "banana", "cherries"];
if (favorite_fruits.includes("bananas")) {
    console.log("you really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("you really like apples!");
}
if (favorite_fruits.includes("cherries")) {
    console.log("you really like cherries!");
}
// continue with more fruits
