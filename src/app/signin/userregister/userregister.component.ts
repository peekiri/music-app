import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/validators/email.validator';
import { passwordValidator } from '../../shared/validators/password.validator';
import { phonenumberValidator } from '../../shared/validators/phonenumber.validator';
import { passwordMatchValidator } from '../../shared/validators/passwordmatch.validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  registerForm : FormGroup;
  registrationFormError= '';

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.registerForm =  new FormGroup({
      'registerData' : new FormGroup({
        'firstName' : new FormControl('',[Validators.required]),
        'lastName' : new FormControl('',[Validators.required]),
        'userName' : new FormControl('',[Validators.required]),
        'emailAddress' : new FormControl('',[Validators.required, emailValidator]),
        'password' : new FormControl('',[Validators.required, passwordValidator]),
        'confirmPassword' : new FormControl('',[Validators.required]),
        'phoneNumber' : new FormControl('',[Validators.required,phonenumberValidator]),
        'dateOfBirth' : new FormControl('',[Validators.required])
      })
    }, {validators: passwordMatchValidator});
  }

  // Register the user.
  onUserRegister() {
      this.userService.saveRegisteredUser(this.registerForm.value.registerData)
        .subscribe(
          registrationSuccessful => {
            if(registrationSuccessful) {
                this.router.navigate(["login"]);
            }
          }, error => {
                this.registrationFormError = "Incorrect data is entered!!";
          }
        );
  }

}
