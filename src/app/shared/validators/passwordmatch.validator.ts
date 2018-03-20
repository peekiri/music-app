import { FormGroup } from "@angular/forms";

// checks if the confirm password is different from password entered.
export function passwordMatchValidator(formGroup : FormGroup){

    let password = formGroup.controls.registerData["controls"].password.value;
    let confirmPassword = formGroup.controls.registerData["controls"].confirmPassword.value;

    return password === confirmPassword ? null : { validConfirmPassword : false };

}