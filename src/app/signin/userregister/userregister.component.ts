import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/validators/email.validator';
import { passwordValidator } from '../../shared/validators/password.validator';
import { phonenumberValidator } from '../../shared/validators/phonenumber.validator';
import { passwordMatchValidator } from '../../shared/validators/passwordmatch.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private userService : UserService) { 
  }

  ngOnInit() {
    this.registerForm =  new FormGroup({
      'registerData' : new FormGroup({
        'firstName' : new FormControl('',[Validators.required]),
        'lastName' : new FormControl('',[Validators.required]),
        'email' : new FormControl('',[Validators.required, emailValidator]),
        'password' : new FormControl('',[Validators.required, passwordValidator]),
        'confirmPassword' : new FormControl('',[Validators.required]),
        'phone' : new FormControl('',[Validators.required,phonenumberValidator])
      })
    }, {validators: passwordMatchValidator});
  }

  // Register the user.
  onUserRegister() {
      this.userService.saveRegisteredUser();
  }

}
