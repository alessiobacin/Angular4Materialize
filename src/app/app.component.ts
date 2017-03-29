import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app works!';
  currentUser: any;
  
  constructor(){
      if (localStorage.getItem('currentUser')) {
      this.currentUser = true;
      // console.log(this.currentUser);
    } else {
      this.currentUser = false;
    }
  }

  ngAfterViewInit(){

    
  }
  side(){
   
  }
}
