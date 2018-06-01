import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    successfulLogin : boolean = true;

    loginUrl : string = "http://localhost:8008/login";

    constructor(private router: Router, private http: HttpClient) {}

    signInValidate ( email : string, password : string ) : Observable<any> {
        
        return this.http.post<any>(this.loginUrl,
            JSON.stringify({emailAddress: email, password: password}), {
                observe : 'response'
            });

    }

}