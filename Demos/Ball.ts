export class Ball {
    id: number;
    color: string;
    size: string;
    
//    define constructors; no getters and setters bc it is public
    constructor(inId: number, inColor: string, inSize: string){
        this.id=inId;
        this.color=inColor;
        this.color = inColor;
        this.size=inSize;     
    }
    
    //use a string `` on P32
    about(): string{
        return `Ball: id=${this.id}, color=${this.color}, size=${this.size}`;
        
    }
}