import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { TextValidator } from '../validator.validation';
import { UniqunessValidator } from '../validation/Uniqness.validator';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  // logObj(email){
  //   console.log(email);
  // }

  // submit(f) {
  //   console.log(f);

  // }

  form = new FormGroup({
    email : new FormControl('', [Validators.required], UniqunessValidator.shouldBeUnique),
    password : new FormControl('', [TextValidator.noSpaceAllowed]),
    age: new FormControl('', CustomValidators.range([10, 20]))
  })

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get age(){
    return this.form.get('age');
  }

  login(){
    // Check Data from API
    // Login
    // else
    // set errors
    return this.form.setErrors({invalidLogin: true});
  }

}
