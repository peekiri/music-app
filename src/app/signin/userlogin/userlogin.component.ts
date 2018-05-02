import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { emailValidator } from "../../shared/validators/email.validator";
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  userLoginForm: FormGroup;

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit() {
    this.userLoginForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required, emailValidator]),
        'password': new FormControl(null, [Validators.required])
      })
    });
  }

  onLogin(){
    this.authService.signInValidate( this.userLoginForm.value.userData['email'],
        this.userLoginForm.value.userData['password']);
    this.router.navigate(['/dashboard']);
  }

  onForgotPassword(){
    console.log("Forgot password is clicked");
    this.router.navigate(['forgotpwd']);
  }

}
