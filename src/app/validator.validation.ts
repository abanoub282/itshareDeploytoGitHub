import { AbstractControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";


export class TextValidator {

  static  noSpaceAllowed(control:FormGroup) : ValidationErrors | null
     {
        // !=-1 Means it contain space
        // a hmed
        if((control.value as string).indexOf('') !=-1){
            /// fire validator
            return {noSpaceAllowed: true};
        }
        else
        {
            return null;
        }
    }
} 