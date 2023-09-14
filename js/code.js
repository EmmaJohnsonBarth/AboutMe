
'use strict'

let userName = prompt('What is your name?', 'Bob');

alert('Welcome to the site, ' + userName);

document.write('Hello, ' + userName + '!');

function questionOne() {
    let answer = prompt('Was I born in the state of Iowa? y/n');
    if (answer.toLowerCase() === 'n' || answer.toLowerCase() === 'no') {
        // console.log("Correct!")
        alert("Correct!");
        questionTwo();
    } else {
        // console.log("Try again!")
        alert('Incorrect! I actually was born in Kentucky!')
        questionTwo();
    }
}

function questionTwo() {
    let answer = prompt('Do I play the piano? y/n');
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
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
        // console.log("Correct!")
        alert('Correct!');
        questionFive();
    } else {
        // console.log("Try again!")
        alert('Incorrect! I worked for the University of Iowa.');
        questionFive();
    }
}

let answer6;

function questionFive() {
    let answer = prompt('Did I attend Cornell College? y/n');
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        // console.log("Good job!)
        alert('Correct!');
        let answer6 = prompt('How many pets do I own?');
        answer6 = parseInt(answer6);
        // questionSix();
        lastTwo();
    } else {
        // console.log("Try again!")
        alert('Incorrect! I did attend Cornell College!');
        let answer6 = prompt('How many pets do I own?');
        answer6 = parseInt(answer6);
        return answer6;
        lastTwo();
    }
}

let answer7;

function lastTwo() {
    let attemptsQ6 = 0;
    while (attemptsQ6 <= 6) {
        if (answer6 === 3) {
            alert('Correct!');
            let answer7 = prompt('What is the name of one of my pets? Hint: One is a flower, one is a cartoon chipmunk, and one is a cartoon singer!');
            break;
        } else if (answer6 > 3) {
            alert('Too high!');
            attemptsQ6++;
            answer6 = prompt('How many pets do I own?');
        } else if (answer6 < 3) {
            attemptsQ6++
            alert('Too low!');
            answer6 = prompt('How many pets do I own?');
        } else {
            alert('what')
        };
    };

    let arrOfAnswers = ['alvin', 'daisy', 'josie'];
    let answer7LC = answer7.toLowerCase();

    for (let attemptsQ7 = 0; attemptsQ7 <= 6; attemptsQ7++) {

        if (attemptsQ7 > 6) {
            alert('Too many attempts! The answers were Daisy, Alvin, and Josie.');
            attemptsQ7 = 0;
            break;
        }

        if (answer7LC === 'alvin' || answer7LC === 'daisy' || answer7LC === 'josie') {
            alert('Correct!');
        } else if (answer7 > 3) {
            alert('Too high!');
            attemptsQ7++;
            answer7 = prompt('How many pets do I own?');
        } else if (answer7 < 3) {
            attemptsQ7++
            alert('Too low!');
            answer7 = prompt('How many pets do I own?');
        } else {
            alert('what')
        };
    };

};

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