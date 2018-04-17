export class User{
    public firstName: string;
    public lastName: string;
    public email: string;
    public userName: string;
    public phoneNumber: number;
    public dateOfBirth: Date;
    public password: string;

    constructor(firstName: string, lastName: string, email: string, userName: string,
        phoneNumber: number, dateOfBirth: Date, password: string){
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.userName = userName;
            this.dateOfBirth = dateOfBirth;
            this.password = password;
    }

}