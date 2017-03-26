import { Component, OnInit } from '@angular/core';
// declare let $;
// declare let jQuery;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  logout() {
    localStorage.removeItem('currentUser');
  }

  currentUser() {
    return localStorage.getItem('currentUser');
  };

  ngOnInit() {
    // $('#fff').tooltip();
  }
}
