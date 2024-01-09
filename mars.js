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
if (excited.startsWith("Y")) {
    alert("I knew you'd say that. It's so cool that you're going to Mars!")
}
if (excited.startsWith("N")) {
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
firstLetter = firstLetter.toUpperCase();

let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

alert(`Dope, so you bringing ${companionName} the ${companionType}`);

alert("NASA has a interior design team offering to outfit your space ship.");
alert(`You have a couple of options for the interior decor of your ship.
Your options are:
A   Granola Girl type of vibe
B   E-Boy kinda feel
C   Country man and Cowboys
`);
let decorChoice = prompt("What type of decor would you like? A, B or C?");
decorChoice = decorChoice.toUpperCase();
let decor;
if(decorChoice === 'A') {
    decor = 'granola girl';
}
else if (decorChoice === 'B') {
    decor = 'E-Boy';
}
else if (decorChoice === 'C') {
    decor = 'Cowboy';
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`);

let timer = 5;
while (timer > 0) {
    alert(`${timer}...`);
    timer -= 1;
}
alert ('*** LIFTOFF ***')