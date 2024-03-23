/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
*/

// This save the name
let names : string = "Bazma";

// Lowercase          shows the name in all small letter
console.log(names.toLowerCase());

// Uppercase          shows the name in all BIG letter  
console.log(names.toUpperCase());

// Titlecase           shows the name with first letter Big
console.log(names.charAt(0).toUpperCase()+names.slice(1).toLowerCase());