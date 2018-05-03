import {Ball} from './Ball';
import {BallService} from './ballservice';

export class BallComponent {
    ballSvc: BallService;
    
    constructor (bSvc: BallService) {
    this.ballSvc = bSvc;//same as this.ballSvc = BallService
    console.log("BallComponent intialized!")
    }
}
//define a variable that reference Component
let ballComp: BallComponent = new BallComponent ( new BallService());

let b1: Ball = new Ball ( "red", "small" );  //get rid of the id
let b2: Ball = new Ball ( "black", "small");
let b3: Ball = new Ball ( "green", "medium");

ballComp.ballSvc.add(b1);  
ballComp.ballSvc.add(b2);
ballComp.ballSvc.add(b3);

for (let ball of ballComp.ballSvc.list()) {
    console.log(ball.about());
}

console.log ("remove an item ....")
ballComp.ballSvc.remove(b2.id);

for (let ball of ballComp.ballSvc.list()) {
    console.log(ball.about());
}


console.log("Bye!")



//let bArray: Ball[] = [b1, b2, b3];

//for (let b of bArray) {
//    console.log(b.about());
//}

