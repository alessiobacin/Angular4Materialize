import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterContentChecked } from '@angular/core';
import { CustomerSupportChatComponent } from '../../components/customer-support-chat/customer-support-chat.component';
import * as $ from 'jquery';
declare let $;
declare var pause: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hideTheChatValue: boolean = false;
  yearNow = new Date().toString();
  @ViewChild(CustomerSupportChatComponent) closeChat: CustomerSupportChatComponent

  constructor() {
  }

  ngOnInit() {
    $('.parallax').parallax();
  }

  toggleChat(event){
    this.hideTheChatValue = !this.hideTheChatValue;
    // this.closeChat.openWindow(false);
  }

  close(){
    (<HTMLVideoElement>document.querySelector("#mainVideo-complete")).pause();
  }
}
