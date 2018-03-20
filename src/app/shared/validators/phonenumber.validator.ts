import { FormControl } from "@angular/forms";

// Basic check for valid phone number
export function phonenumberValidator(input : FormControl){
    let exp = /^([7-9])([0-9]{9})$/;

    return exp.test(input.value) ? null : { validNumber : false};
}