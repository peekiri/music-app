import { FormControl } from "@angular/forms";

// a function used for validating password
export function passwordValidator(input : FormControl){

    let exp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;

    if(!exp.test(input.value)){
        return {
            validPassword : false
        };
    }

    return null;
}