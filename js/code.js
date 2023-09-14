'use strict';

let userName = prompt('What is your name?', 'Bob');

alert('Welcome to the site, ' + userName);

document.write('Hello, ' + userName + '!');

let points = 0;

function questionOne() {
    let answer = prompt('Was I born in the state of Iowa? y/n');
    if (answer.toLowerCase() === 'n') {
        points++
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
        points++
        // console.log("Correct!")
        alert("Correct!");
        questionThree();
    } else {
        // console.log("Try again!")
        alert('Incorrect! I do play the piano!');
        questionThree();
    }
}

function questionThree() {
    let answer = prompt('Do I own pets? y/n');
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        points++;
        // console.log("Correct!")
        alert("Correct!");
        questionFour();
    } else {
        // console.log("Try again!")
        alert('Incorrect! I do own pets!');
        questionFour();
    }
}

function questionFour() {
    let answer = prompt('Did I work for Iowa State University? y/n');
    if (answer.toLowerCase() === 'n' || answer.toLowerCase === 'no') {
        points++
        // console.log("Correct!")
        alert('Correct!');
        questionFive();
    } else {
        // console.log("Try again!")
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
};

function questionSix() {
    let attemptsQ6 = 0;

    while (attemptsQ6 < 6) {
        let petCount = parseInt(prompt('How many pets do I own?'));

        if (petCount === 3) {
            points++
            alert('Correct!');
            questionSix();
            break;
        } else if (petCount < 3) {
            alert('Too low!');
        } else if (petCount > 3) {
            alert('Too high!');
        } else {
            alert('Please enter a valid number.');
        }

        attemptsQ6++;
    }

    if (attemptsQ6 >= 6) {
        alert('Too many attempts! The correct answer is 3 pets.');
        questionSix();
    }
} else {
    alert('Try again!');
}
}

function questionSix() {
    let petNames = ['Alvin', 'Daisy', 'Josie'];
    let attemptsQ7 = 0;

    while (attemptsQ7 < 6) {
        let answer7 = prompt('What is the name of one of my pets? Hint: One is a flower, one is a cartoon chipmunk, and one is a cartoon singer!').toLowerCase();

        if (petNames) {
            points++;
            alert('Correct! You scored ' + points + ' out of 7 possible points!');
            break;
        } else {
            alert('Incorrect! Try again.');
        }

        attemptsQ7++;
    }

    if (attemptsQ7 >= 6) {
        alert('Too many attempts! The correct answers are: Alvin, Daisy, and Josie.');
    }
}



// let attemptsQ6 = 0;
// function questionSix() {
//     if (attemptsQ6 > 4) {
//         alert('Too many attempts! The answer was 3.');
//         attemptsQ6 = 0;
//         return;
//     }

//     let answer6 = prompt('How many pets do I own?');
//     if (answer6 == 3) {
//         alert('Correct!');
//         questionSeven();
//     } else if (answer6 > 3) {
//         alert('Too high!');
//         attempts++;
//         questionSix();
//     } else if (answer6 < 3) {
//         attempts++
//         alert('Too low!');
//         questionSix();
//     } else {
//         alert('what')
//     };
// };
// let attemptsQ7 = 0
// let arrOfAnswers = ['alvin', 'daisy', 'josie'];

// function questionSeven() {
//     if (attemptsQ7 > 6) {
//         alert('Too many attempts! The answers were Daisy, Alvin, and Josie.');
//         attemptsQ7 = 0;
//         return;
//     }

//     let answer7 = prompt('What is the name of one of my pets? Hint: One is a flower, one is a cartoon chipmunk, and one is a cartoon singer!');
//     let answer7LC = answer7.toLowerCase();

//     if (arrOfAnswers.includes(answer7LC)) {
//         alert('That\'s correct! Good job, ' + userName + '!');
//         attemptsQ7 = 0;
//         return;
//     } else {
//         attemptsQ7++;
//         alert('Guess again! You\'ve taken ' + attemptsQ7 + 'out of 6 attempts!');
//         questionSeven();
//     }
// };