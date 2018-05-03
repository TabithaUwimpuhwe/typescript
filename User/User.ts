export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    isReviewer?: boolean;
    isAdmin?: boolean
    

    constructor( inUserName: string, inPassword: string, inFirstName: string, inLastName: string, inEmail: string, inPhoneNumber: string, inIsReviewer: boolean, inIsAdmin: boolean ){
        
        this.userName =inUserName;
        this.password=inPassword;  
        this.firstName=inFirstName;
        this.lastName=inLastName;
        this.email=inEmail;
        this.phoneNumber=inPhoneNumber;
        this.isReviewer=inIsReviewer;
        this.isAdmin=inIsAdmin;   
    }

    about(): string{
        return `User: id=${this.id}, userName=${this.userName},  password=${this.password}, firstName=${this.firstName}, lastName=${this.firstName}, email=${this.email}, phonenumber=${this.phoneNumber}, isReviewer=${this.isReviewer? "Yes": "No" }, isAdmin?=${this.isAdmin? "Yes": "No"}` }
}

