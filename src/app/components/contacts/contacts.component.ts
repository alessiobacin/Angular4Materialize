import { Component, OnInit, AfterContentChecked } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  lat: number = 45.0549015;
  lng: number = 7.6917535;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    $('#customerChat').css({
      "position": "fixed",
      "width": "350px",
      "right": "0px",
      "bottom": "20px",
      "overflow": "hidden",
      "z-index": "100",
      "margin-right": "20px"
    })
  }
}
