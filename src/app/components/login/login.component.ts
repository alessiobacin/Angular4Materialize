import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginTitle = 'Login';
  loginForm: any;
  user: FirebaseListObservable<any[]>;
  email: any;
  password: any;
  router;
  token: string;
  currentUser;

  constructor(public fb: FormBuilder, public af: AngularFire, router: Router, private http: Http) {
    let emailRegex = "^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,6}(?:\\.[A-Za-z]{2,6})?)$";
    this.loginForm = fb.group({
      'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
    });
    this.user = af.database.list('/user');
    this.router = router;

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.user.subscribe((user) => {
      user.forEach(element => {
        //console.log(element);
        if (this.currentUser) {
          if (this.currentUser.token == element.token) {
            this.router.navigate(['/supportpage']);
            // return true;
          }
        }

      });
    });
  }

  login(value: any) {
    this.user.subscribe((user) => {
      user.forEach(element => {
        console.log(element);
        if (value.email == element.email && value.password == element.matchingPassword.password) {
          //alert("Login Successfully");
          //console.log(JSON.stringify(this.currentUser));
          console.log(element.token);
          let temp = {
            username: this.loginForm.value.email,
            token: element.token
          };
          localStorage.setItem('currentUser', JSON.stringify(temp));
          this.router.navigate(['/supportpage']);
          // return true;
        }
        else if (value.email != value.email) {
          // return false;
        }
      });
    });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
