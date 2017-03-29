import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['home']);
  }

  currentUser() {
    return localStorage.getItem('currentUser');
  };

  ngOnInit() {
  }
}
