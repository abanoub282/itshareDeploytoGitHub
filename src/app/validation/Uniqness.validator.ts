import { AbstractControl, ValidationErrors } from "@angular/forms";
import { promise } from "protractor";
import { resolve } from "url";


export class UniqunessValidator {

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors> | null {

        return new Promise((resolve, reject) => {

            // sumulation to time = exeute to the process
            setTimeout(() => {
                if (control.value == "ahmedbohoty@itshare.com") {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        })
    }
}