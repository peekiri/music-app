import { Injectable } from "@angular/core";
import { User } from "firebase";
import { Subject } from "rxjs";

@Injectable()
export class UserService {

    private user : User;

    userDataChange = new Subject<User>();

    getLoggedInUser(){

    }

    saveRegisteredUser(){

    }

    userLogout(){
        
    }
}