import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";

@Injectable()
export class AuthService{

    // token : string;
    validUser : boolean = false;

    constructor(private router: Router) {}

    isUserAuthenticated () {
        return this.validUser;
    }

    signInValidate ( userName : string, password : string ){
        // firebase.auth().signInWithEmailAndPassword(userName, password)
        //     .then(response => {
        //         this.router.navigate(['/dashboard']);
        //         console.log(response);
        //         firebase.auth().currentUser.getToken()
        //             .then(
        //                 (token: string) => this.token = token
        //         )
        //     });

        const email = "test@test.com";
        const pwd = "Test@123";

        if(userName === email && password === pwd){
           return this.validUser = true; 
        }

        return this.validUser;
    }

}