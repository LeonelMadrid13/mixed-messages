/*  
    horoscope:
        - select random sign
        - select random luck
        - random prediction

    example:
    Your sign is sun.
    You are having good luck. 
    You should: "trust no one"
*/

let horoscope = require("./DB/horoscope");

let randSign = Math.floor(Math.random() * 19);
let randluck = Math.floor(Math.random() * 4);
let randPred = Math.floor(Math.random() * 4);

let sentence = ` Your sign is ${horoscope.sign[randSign]}. \n You are having ${horoscope.luck[randluck]}. \n You should: "${horoscope.predictions[randPred]}"`;

console.log(sentence);
