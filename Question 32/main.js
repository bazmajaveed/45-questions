/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
 Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
var current_users = ["Sajid", "Jafar", "Wahid", "Qadir", "Raziq"];
var new_users = ["Ahmed", "Basid", "Haroon", "Qaroon", "Mubashir"];
// use forEach method
new_users.forEach(function (new_user) {
    var new_userLower = new_user.toLowerCase();
    // use some() method
    var userNameTaken = current_users.some(function (current_user) { return current_user.toLowerCase() === new_userLower; }); //True or False
    // Apply condition
    if (userNameTaken) {
        console.log("".concat(new_user, " need to choose a new username because it's already taken"));
    }
    else {
        console.log("".concat(new_user, " will need to enter a new username."));
        current_users.push(new_user); //Add new user to current users array
    }
});
console.log(current_users);
