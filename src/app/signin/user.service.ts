import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Http, Headers, RequestOptions } from "@angular/http";
import { User } from "../models/user.model";
import { Router } from "@angular/router";

@Injectable()
export class UserService {

    private user : User;
    private userUrl = "http://localhost:8008/user/";

    userDataChange = new Subject<User>();

    constructor(private http : Http, private router : Router) {}

    getLoggedInUser(){

    }

    saveRegisteredUser(data : object){
        let bodyStringify = JSON.stringify(data);
        let headers = new Headers({'Content-type' : 'application/json'});
        let options = new RequestOptions({headers : headers});

        this.http.post(this.userUrl+"register", bodyStringify , options).
            map(() => {
                this.router.navigate(["login"]);
            }).catch();
    }

    userLogout(){
        
    }
}