import {User} from './User';
import {UserService} from './UserService';

export class UserComponent {
    userSvc: UserService;
    
    constructor (uSvc: UserService) {
    this.userSvc = uSvc;//same as this.userSvc = UserService
    console.log("UserComponent intialized!")
    }
}
    
let userComp: UserComponent = new UserComponent ( new UserService());

let u1: User = new User ( "Frantz", "xxxx", "Frantz", "Gabeau", "frantz@yahoo.com", "555-555-5555",  false, false  );  
let u2: User = new User ( "Frantz", "xxxx", "Frantz", "Gabeau", "frantz@yahoo.com", "555-555-5555",  false, false  );  
let u3: User = new User ( "Frantz", "xxxx", "Frantz", "Gabeau", "frantz@yahoo.com", "555-555-5555",  false, false   );  
let u4: User = new User ( "Frantz", "xxxx", "Frantz", "Gabeau", "frantz@yahoo.com", "555-555-5555",  false, false   );  
let u5: User = new User ( "Frantz", "xxxx", "Frantz", "Gabeau", "frantz@yahoo.com", "555-555-5555",  false, false   );  
userComp.userSvc.add(u1);  
userComp.userSvc.add(u2);
userComp.userSvc.add(u3);
userComp.userSvc.add(u4);
userComp.userSvc.add(u5);

for (let User of userComp.userSvc.list()) {
    console.log(User.about());
}

console.log ("remove an item ....")
userComp.userSvc.remove(u2.id);

for (let user of userComp.userSvc.list()) {
    console.log(user.about()); //lowercase user
}

console.log("Bye!")
