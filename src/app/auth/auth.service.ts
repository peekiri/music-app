import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()
export class AuthService{

    // token : string;
    validUser : boolean = false;

    constructor(private router: Router, private http: Http) {}

    isUserAuthenticated () {
        return this.validUser;
    }

    signInValidate ( email : string, password : string ){
        // firebase.auth().signInWithEmailAndPassword(userName, password)
        //     .then(response => {
        //         this.router.navigate(['/dashboard']);
        //         console.log(response);
        //         firebase.auth().currentUser.getToken()
        //             .then(
        //                 (token: string) => this.token = token
        //         )
        //     });

        // const email1 = "test@test.com";
        // const pwd = "Test@123";

        // if(email1 === email && password === pwd){
        //    return this.validUser = true; 
        // }
        let headers = new Headers({'Content-type' : 'application/json'});
        let options = new RequestOptions({headers : headers});
        
        this.http.post('http://localhost:8008/login',
            JSON.stringify({emailAddress: email, password: password}), options).
            map((response: Response)=> {
                console.log(response.json);
            }).subscribe();

        return this.validUser;
    }

}