import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class AuthService{

    constructor(private router: Router, private http: Http) {}

    signInValidate ( email : string, password : string ): Observable<boolean>{

        let headers = new Headers();

        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Credentials", "true"); 
        headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
        headers.append("Content-Type", "application/json,application/x-www-form-urlencoded");

        let options = new RequestOptions({headers : headers});
        
        return this.http.post('http://localhost:8008/login',
            JSON.stringify({emailAddress: email, password: password}), options).
            map((response: Response)=>{
                if(response.ok) {
                    localStorage.setItem('validUser', 'true');
                    return true;
                }
            });
    }

}