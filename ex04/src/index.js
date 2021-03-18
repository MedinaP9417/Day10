// Only change code below this line

var players = {
    7: '(Muhamed Besic)',
    10: '(Miralem Pjanic)',
    11: '(Edin + Dzeko)',
};

function myFunction(players) {
    var playerNumber = "10";
    var player = players[10];
    return player;
}

console.log(myFunction(players));
// Only change code above this line
module.exports = { players, myFunction }