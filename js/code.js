'use strict';

let userName = prompt('What is your name?', 'Bob');

alert('Welcome to the site, ' + userName);

document.write('Hello, ' + userName + '!');

let points = 0;

function questionOne() {
    let answer = prompt('Was I born in the state of Iowa? y/n');
    if (answer.toLowerCase() === 'n' || answer.toLowerCase() === 'no') {
        points++;
        alert('Correct!');
        questionTwo();
    } else {
        alert('Incorrect! I was born in Kentucky!');
        questionTwo();
    }
}

function questionTwo() {
    let answer = prompt('Do I play the piano? y/n');
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        points++;
        alert("Correct!");
        questionThree();
    } else {
        alert('Incorrect! I do play the piano!');
        questionThree();
    }
}

function questionThree() {
    let answer = prompt('Do I own pets? y/n');
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        points++;
        alert('Correct!');
        questionFour();
    } else {
        alert('Incorrect! I do own pets!');
        questionFour();
    }
}

function questionFour() {
    let answer = prompt('Did I work for Iowa State University? y/n');
    if (answer.toLowerCase() === 'n' || answer.toLowerCase === 'no') {
        points++;
        alert('Correct!');
        questionFive();
    } else {
        alert('Incorrect! I worked for the University of Iowa.');
        questionFive();
    }
}

function questionFive() {
    let answer6 = prompt('Did I attend Cornell College? y/n');
    if (answer6.toLowerCase() === 'y' || answer6.toLowerCase() === 'yes') {
        points++;
        alert('Correct!');
        questionSix();
    } else {
        alert('Incorrect! I did attend Cornell College.');
        questionSix();
    }
}

function questionSix() {
    let attemptsQ6 = 0;

    while (attemptsQ6 < 6) {
        let petCount = parseInt(prompt('How many pets do I own?'));

        if (petCount === 3) {
            points++;
            alert('Correct!');
            questionSeven();
            break;
        } else if (petCount < 3) {
            attemptsQ6++;
            alert('Too low!');
        } else if (petCount > 3) {
            attemptsQ6++;
            alert('Too high!');
        } else {
            alert('Please enter a valid number.');
        }
    }

    if (attemptsQ6 >= 6) {
        alert('Too many attempts! The correct answer is 3 pets.');
        questionSeven();
    }
}

function questionSeven() {
    let petNames = ['alvin', 'daisy', 'josie'];
    let attemptsQ7 = 0;

    while (attemptsQ7 < 6) {
        let answer7 = prompt('What is the name of one of my pets? Hint: One is a flower, one is a cartoon chipmunk, and one is a cartoon singer!').toLowerCase();

        if (petNames.includes(answer7)) {
            points++;
            alert('Correct! You scored ' + points + ' out of 7 possible points!');
            break;
        } else {
            attemptsQ7++;
            alert('Incorrect! Try again.');
        }
    }

    if (attemptsQ7 >= 6) {
        alert('Too many attempts! The correct answers are: Alvin, Daisy, and Josie.');
        alert('You scored ' + points + ' out of 7 possible points!')
    }
}