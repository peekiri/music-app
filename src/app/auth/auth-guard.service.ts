import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { UserService } from "../signin/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private router : Router, private userService : UserService){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(localStorage.getItem('validUser') === 'true'){
            this.userService.getLoggedInUser();
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}