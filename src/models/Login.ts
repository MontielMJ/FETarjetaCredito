export class Login{
    email : string;
    password : string;

    /**
     *construtor login
     */
    constructor(email : string, password : string) {
        this.email = email;
        this.password = password; 
    }
}