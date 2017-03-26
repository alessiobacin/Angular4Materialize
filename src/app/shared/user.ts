export class User {
    $key: string;
    email: string;
    firstname: string;
    lastname: string;
    token: string;
    matchingPassword: {
        password: string;
        confirmPassword: string;
    }

    getFullName(){
        return this.firstname + ' ' + this.lastname; 
    }
}