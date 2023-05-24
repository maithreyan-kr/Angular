import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  title = 'Angular Reactive Form';
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',[
        Validators.required, 
        Validators.minLength(5), 
        Validators.email, 
        Validators.pattern('[a-zA-Z]+$'), 
        UsernameValidators.cannotContainSpace, 
        UsernameValidators.shouldBeUnique
      ]),
      password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(15)])
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  formC() {
    console.warn(this.form.value)
  }

  get password() {
    return this.form.get('password');
  }

}

