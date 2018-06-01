import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Headers, RequestOptions, Response } from "@angular/http";
import { User } from "../models/user.model";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {

    private user : User;
    private userUrl = "http://localhost:8008/user/";

    userDataChange = new Subject<User>();

    constructor(private http : HttpClient) {}

    getLoggedInUser(){

        this.http.get(this.userUrl+"test", {
            observe : "response"
        }). subscribe();
    }

    saveRegisteredUser(data : object): Observable<any>{
        let bodyStringify = JSON.stringify(data);

        return this.http.post<any>(this.userUrl+"register", bodyStringify , {});
    }

    userLogout(){
        
    }
}