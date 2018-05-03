import {Game} from './Game';


let game: Game = new Game();

let numGames: number = 1000000;
let  highest: number = 0;

for (let i: number = 0; i<numGames ; i++){
    let score: number = game.play();
    if (score > highest ) {
        highest=score;
    }
}

console.log("highest score is: " + highest);

