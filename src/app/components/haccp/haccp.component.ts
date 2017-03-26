import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-haccp',
  templateUrl: './haccp.component.html',
  styleUrls: ['./haccp.component.scss']
})
export class HaccpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".button-collapse").sideNav();
  }

}
