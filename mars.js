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
