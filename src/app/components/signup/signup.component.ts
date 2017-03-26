import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupTitle = 'New registration';
  createForm: any;
  user: FirebaseListObservable<any[]>;
  token: string;
  passwordValid: boolean = false;
  router;

  constructor(fb: FormBuilder, af: AngularFire, router: Router) {
    const emailRegex = "^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,6}(?:\\.[A-Za-z]{2,6})?)$";
    this.token = Math.random().toString(36).substr(2);
    this.createForm = fb.group({
      'firstname': ['', [Validators.required, Validators.minLength(4)]],
      'lastname': ['', [Validators.required, Validators.minLength(4)]],
      'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
      'matchingPassword': fb.group({
        'password': ['', [Validators.required, Validators.minLength(6)]],
        'confirmPassword': ['', [Validators.required, Validators.minLength(6)]]
      }, { validator: this.validatePassword }),
      'token': this.token
    });
    this.user = af.database.list('/user');

  }
  createUser() {
    //console.log(this.createForm.value);
    this.user.push(this.createForm.value);
    localStorage.setItem('currentUser', '{ "username": "' + this.createForm.value.email + '", "token": "' + this.token + '" }');
    this.router.navigate(['/restrictedarea']);
  }

  ngOnInit() {
  }

  validatePassword(formObject) {
    if (formObject.value.password == formObject.value.confirmPassword) {
      //this.passwordValid = true;
      return null;
    }
    else {
      return { validatePassword: { valid: false } };
    }
  }
}
