/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/
var animals = ["cat", "tiger", "lion"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var i = animals_1[_i];
    console.log(i);
}
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var j = animals_2[_a];
    console.log("".concat(j, " animals would make a great pet!"));
}
console.log("All these animals ".concat(animals[0], ",  ").concat(animals[1], " and ").concat(animals[2], " meat is not Halal in Islam"));
