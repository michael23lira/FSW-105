var readlineSync = require('readline-sync');

var playerName = readlineSync.question('May I have your name? ');

const welcome = `Hello ${playerName}, WELCOME, to the grand escape room game simulation.`
console.log(welcome);

let isAlive = true;
let hasKey = false;

while (isAlive == true) {
    const menuOptions = readlineSync.keyIn(`Enter 1 to put hand in hole, Enter 2 to find the key, or Enter 3 to open the door: `, {limit: `$<1-3>`});

    switch(menuOptions){
    case "1":{
        menuOptions == 1
        isAlive = false
        console.log(`${playerName}, you have been terminated, and unfortunately, the game is over.`);
    }   break;
    case "2":{
        if ( menuOptions == 2 && hasKey == false ){
        console.log(`Great Job, ${playerName}, you have found the key. Proceed to the next menu option and exit the escape room succesfully to redeem your prize.`);
        hasKey == true
        }
        else if (menuOptions == 2 && hasKey == true){
            console.log(`C'mon, ${playerName}, you already have the key.`)
        }
    }   break;
    case "3":{
        if (menuOptions == 3 && hasKey == true){
        console.log(`Congratulations, you have succesfully beat the Escape Room Simulation, ${playerName}`);
        hasKey == true;
        }
        else if (menuOptions == 3 && hasKey == false){
            console.log(`You must have key in hand. Try again!`)
            hasKey == false;
        }
    }   break;
}
}