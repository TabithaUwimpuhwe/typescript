export class Game {
    
    constructor(){
    //empty constructor bc the function die () method get the random number for us, we don't set/get anything; but still have to have this empty constructor
    }

    
      die(): number { // dont use functions in class; use in main
        return Math.floor(Math.random()*6) +1;
    }
    
    play(): number {

        let total: number = 0; //value will be added each time you play (score)

        while(true) {
            let roll: number = this.die();
            if (roll  == 1) {
                break;
            }
            else {
                total += roll;
            }
        }
        return total; 
    }
    
}

