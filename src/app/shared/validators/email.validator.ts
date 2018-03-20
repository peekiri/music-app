import { FormControl } from '@angular/forms';

// a function used for validating email.Return "null" if it is validated to true.
export function emailValidator(input : FormControl){
    // let emailRegex = new RegExp("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}");
    let emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;
    
    if(!emailRegex.test(input.value)){
      return {
          validEmail : false
      };
    }

    return null;
}