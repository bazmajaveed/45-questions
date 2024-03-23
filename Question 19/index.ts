/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/
let guests : string[] =["Amna" ,"Ali", "Usman", "Fatima" ];

console.log(`I am inviting ${guests.length} people to dinner.\n`);

for (let i = 0; i < guests.length; i++){
    console.log(`${guests[i]}`)
}