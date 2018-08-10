import { AbstractControl, ValidationErrors } from '@angular/forms';


export class InputFieldValidators {
   static notEmptyFieldValidator(c: AbstractControl): ValidationErrors | null {     
  
    if((c.value as string) === "") {
      return { notEmptyFieldValidator : true };
    }

    return null;
  }
}
