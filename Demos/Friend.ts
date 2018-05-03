export class Friend {
    name: string;
    age: number;
    email: string;
    bestFriend?: boolean;
    
//    define constructors; no getters and setters bc it is public
    constructor(inName: string, inAge: number, inEmail: string, inBestFriend?: boolean) {
        this.name=inName;
        this.age=inAge;
        this.email = inEmail;
      this.bestFriend=inBestFriend;     
    }
    
    //use a string `` on P32
    about(): string{
        return `${this.name}, ${this.age}, ${this.email}, ${this.bestFriend? "Yes": "No"} `;
    }
//    
     // return a string representing this Friend
//    about(): string {
//		let bfString: string = this.bestFriend?"Yes":"No";
//        let rString: string = this.name+"\t"+this.age+"\t"+this.email+"\t"+bfString;
//        return rString;
//    }
    
    
    
}

