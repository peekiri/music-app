import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { emailValidator } from "../../shared/validators/email.validator";
import { AuthService } from '../../auth/auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  userLoginForm: FormGroup;
  loginError = '';
  successfulLogin : boolean = false;

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit() {

    localStorage.clear();

    this.userLoginForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required, emailValidator]),
        'password': new FormControl(null, [Validators.required])
      })
    });
  }

  onLogin(){
    this.authService.signInValidate(this.userLoginForm.value.userData['email'],
        this.userLoginForm.value.userData['password']).
          subscribe((response : HttpResponse<any>) => {
            if(response.ok){
                localStorage.setItem('validUser', 'true');
                localStorage.setItem('authHeader', response.headers.get('Authorization'));
                this.router.navigate(['/dashboard']);
            } 
      }, error => {
        this.loginError = "Email Address or Password is not correct!!!!";
      });
  }

  onForgotPassword(){
    console.log("Forgot password is clicked");
    this.router.navigate(['forgotpwd']);
  }

}
