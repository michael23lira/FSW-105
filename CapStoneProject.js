const readlineSync = require(`readline-sync`);

const userName = readlineSync.question(`What will you name your character?`);
    readlineSync.question(`Hello, ${userName}! & Welcome to "A & R". A game of taking a chance at an Attack or RunAway. Collect all Horcruxes to Succeed.`);

const enemies = [`Dragon`, `Voldemort`, `Giant Troll`, `Dementor`];
const horcrux = [`Sword`, `Diary`, `Nagini`, `Prof. Quirrel`];
var win = [];
let userHealth = 40
const menu = [`Fly`, `Bag`, `Exit`];
let grab = horcrux[Math.floor(Math.random() * horcrux.length)];

function game(){
    const attackPower = Math.floor(Math.random() * 5 - (3 * 4) + 11);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemiesHealth = 40;
    const enemiesAttack = Math.floor(Math.random() * 6 - (3 * 4) + 11);

const index = readlineSync.keyInSelect(menu, `Make your next choice.`);

    if (menu[index] == `Exit`){
            console.log(`Thank you for playing!!`);
                return userHealth = 0;
        }
    else if (menu[index] == `Bag`){
            console.log(userName + `: \n` + userHealth + `\nHorcrux` + grab);
        }
    else if(menu[index] == `Fly`){
            let key = Math.random();
            if (key <= .5){
                console.log(`Flying on your Broomstick...`);
            } 
        else if (key >= .5){
                console.log(`Uh oh. You must now fight ` + enemy);

                while (enemiesHealth > 0 && userHealth > 0) {
                    const player = readlineSync.question(`You are now in a fight. Press "a" for wand attack or "f" to try and fly away.`);

                        switch(player){
                            case `f`:
                                const fly = Math.random();
                                if (fly > .5){
                                    console.log(`Congrats, you apparated!`);
                                } else {
                                    console.log(`Uh oh. ` + enemy + ` has made sure you can't get away. ` + enemy + ` attacks ` + enemiesAttack);
                                    break;
                                }
                            case `a`:
                                enemiesHealth -= attackPower;
                                console.log(`Congrats ` + userName + `, you dealt ` + attackPower + `to` + enemy + `!!`);

                                userHealth -= enemiesAttack;
                                console.log(`Ouch you were dealt ` + enemiesAttack + ` now putting you at ` + userHealth + `.`);

                            if (enemiesHealth <= 0){
                                console.log(`Congratulations, ` + userName + `. You have defeated ` + enemy + `.\n` + enemy + ` has dropped ` + grab);
                                let item = Math.random();
                                if (item <= .3){
                                    win.push(grab);
                                }
                            } else if(userHealth <= 0){
                                console.log(`Sorryyy! ` + enemy + ` has defeated you! Try again!`);
                            }
                        }
                }
            }
        }
    }

while (userHealth > 0){
    game();
}
