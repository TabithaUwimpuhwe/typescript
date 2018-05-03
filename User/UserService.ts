import {User} from './User';

export class UserService {
    UserList: User[]=[];
    nextId: number = 1;
    
    
    add(User: User): string {
       User.id = this.nextId++;
        this.UserList.push(User); // we need this to reference an attribute;
        return "success";
    }
    list (): User[] {
        return this.UserList;
    }
    
    remove(id: number): string {
     let index: number = -1;
        for (let idx: number = 0; idx < this.UserList.length; idx++) {
               if (id== this.UserList [idx].id) {
                   index = idx;
                   break;
               }
            }
        this.UserList.splice(index, 1);
        return "Removed."
    }
}