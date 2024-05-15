// 1-

const jogos = ["Valorant", "Fortnite", "GTA V", "God of War"]

console.log(jogos[0]);
console.log(jogos[2]);

// 2-

const bidimensional = [
    ["GTA V", "God of War", "Rainbow Six"],
    ["Rocket League", 1, 2],
    ["Valorant", "Fortnite", "GTA V"]
]

console.log(bidimensional);

let Fortnite = bidimensional[2][1]
let Valorant = bidimensional[2][0]

console.log(Fortnite);
console.log(Valorant);

bidimensional[0][0] = "Fortnite"
bidimensional[1][0] = "LOL"
bidimensional[2][0] = "Team Fortress"

console.log(bidimensional);