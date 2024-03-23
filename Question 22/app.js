/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/
var friends = ["Manaheel", "Shanza", "Medhat"];
// International error:Arrays are zero-indexd, so index 3 is out of bounds.
console.log(friends[3]);
// Correcting the error by accessing a valid index.
friends[2] = "Shanza";
