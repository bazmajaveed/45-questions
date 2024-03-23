/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/
var guests = ["Amna", "Ali", "Usman", "Fatima"];
console.log("I am inviting ".concat(guests.length, " people to dinner.\n"));
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i]));
}
