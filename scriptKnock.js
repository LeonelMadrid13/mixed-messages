/*  
    user have to choose:
        1- knock knock jokes
            - elija de diferentes arrays, 
        2- horoscope 
*/
let knock = require("./DB/KnockKnock");

let rand = Math.floor(Math.random() * 60);
console.log(knock.knockJokes[rand]);
