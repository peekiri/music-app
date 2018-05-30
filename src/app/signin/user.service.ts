import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { User } from "../models/user.model";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class UserService {

    private user : User;
    private userRegistrationUrl = "http://localhost:8008/user/";

    userDataChange = new Subject<User>();

    constructor(private http : Http) {}

    getLoggedInUser(){

    }

    saveRegisteredUser(data : object): Observable<boolean>{
        let bodyStringify = JSON.stringify(data);
        let headers = new Headers({'Content-type' : 'application/json'});
        let options = new RequestOptions({headers : headers});

        return this.http.post(this.userRegistrationUrl+"register", bodyStringify , options).
            map((response: Response) => {
                if(response.ok){
                    return true;
                }
            });
    }

    userLogout(){
        
    }
}