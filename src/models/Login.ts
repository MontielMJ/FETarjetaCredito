export class Login{
    emailAddress : string;
    password : string;

    /**
     *construtor login
     */
    constructor(emailAddress : string, password : string) {
        this.emailAddress = emailAddress;
        this.password = password; 
    }
}