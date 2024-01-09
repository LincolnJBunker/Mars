alert('Hello!');
alert('Starting your Mars Adventure!');
alert('Booting up...');
alert('All systems go!');
alert("Let's Start!");

const username = prompt("Hi there! What's your name?");
alert(`Hello ${username}-Welcome to the Mars Adventure Game.`);

alert('Yesterday, you received a call from your good friend at NASA');
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!!");
let excited = prompt("Are you excited? Type Y o N");
excited = excited.toUpperCase();
if (excited === "Y") {
    alert("I knew you'd say that. It's so cool that you're going to Mars!")
}
if (excited === "N") {
    alert("Well, it's too late to back out now")
}

alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt("How many suitcases do you plan to bring?");
numSuitcases = Number(numSuitcases);

if (numSuitcases > 2) {
    alert("That's way too many cuh, you'll have to pack more lightly.");
    alert("Please try to fit your stuff into 2 suitcases");
}

else { 
    alert("Perfect! You finna fit in the ship!")
}

alert("You're allowed to bring one companion animal with you.");
const companionType = prompt("What kind of animal would you like to bring?");
let companionName = prompt("What is your companion's name?");

let firstLetter = companionName [0];
firstLetter = firstLetter.toUppercase();

let otherLetters = companionName.slice(1);
otherLetters= otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;


alert(`Dope, so you bringing ${companionName} the ${companionType}`);
