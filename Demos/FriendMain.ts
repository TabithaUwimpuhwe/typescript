import {Friend} from './Friend';

let f1: Friend = new Friend ("Frantz", 55, "frantz@yahoo.com", true );
let f2: Friend = new Friend ("Gabeau", 53, "gabeau@yahoo.com", true );
let f3: Friend = new Friend ("Marc", 47, "mark@yahoo.com", true );
let f4: Friend = new Friend ("Gatsinzi", 50, "gatsinzi@yahoo.com", false );
let f5: Friend = new Friend ("Josee", 34, "jose@yahoo.com", false );


let fArray: Friend[] = [f1, f2, f3, f4, f5];

for (let f of fArray) {
    console.log(f.about());
}
