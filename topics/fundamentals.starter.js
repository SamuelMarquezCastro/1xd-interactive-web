/*
 ____  _  _  __ _  ____   __   _  _  ____  __ _  ____  __   __    ____ 
(  __)/ )( \(  ( \(    \ / _\ ( \/ )(  __)(  ( \(_  _)/ _\ (  )  / ___)
 ) _) ) \/ (/    / ) D (/    \/ \/ \ ) _) /    /  )( /    \/ (_/\\___ \
(__)  \____/\_)__)(____/\_/\_/\_)(_/(____)\_)__) (__)\_/\_/\____/(____/
 */

// 2. Create a variable for your name
let myName = "Samuel";

// 3. Ask for birth year
let birthYear = parseInt(prompt("Enter your birth year:"));

// 4. Calculate age
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

// 5. Log age to console
console.log(`You are ${age} years old.`);

// 6. Function to greet
function greet(name) {
    console.log(`Hi there, ${name}! Have a nice day!`);
}
greet(myName);

// 7. Function to calculate age
function calculateAge(birthYear) {
    let age = new Date().getFullYear() - birthYear;
    console.log(`You are ${age} years old.`);
}
calculateAge(birthYear);

// 8. Ask how user is feeling
let feeling = prompt("How are you feeling today? (good, bad, ok)");
switch (feeling.toLowerCase()) {
    case "good":
        console.log("😊");
        break;
    case "bad":
        console.log("😞");
        break;
    case "ok":
        console.log("😐");
        break;
    default:
        console.log("🤔");
}

// 9. Create an array of favorite foods
let foods = ["Apple", "Sushi", "Pasta"];
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

// 10. Create an object with personal details
let person = {
    name: myName,
    age: age,
    favoriteFoods: foods
};
console.log(person);

