import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Thread } from '../../shared/thread';
import { User } from '../../shared/user';
import { Message } from '../../shared/message';
import { InfosFromIpService } from '../../services/infos-from-ip.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-customer-support-chat',
  templateUrl: './customer-support-chat.component.html',
  styleUrls: ['./customer-support-chat.component.scss']
})
export class CustomerSupportChatComponent implements OnInit {
  threads$: FirebaseListObservable<Thread[]>;
  messages$: FirebaseListObservable<Message[]>;
  users$: FirebaseListObservable<User[]>;

  thisCustomerThread: Thread;
  thisCustomerThreadStatus: string;
  currentMessages: Message[] = [];

  createForm: any;
  hideNameField: boolean = false;
  cityFromIp: string;

  windowChatState: boolean = true;
  chatHide = false;
  videoSize;

  @Output("onEmitChatHide")
  emitChatHide = new EventEmitter<boolean>();

  constructor(public _af: AngularFire, public _fb: FormBuilder, public _infosFromIpService: InfosFromIpService) {
    this.threads$ = _af.database.list('/chat/threads');
    this.messages$ = _af.database.list('/chat/messages');
    this.users$ = _af.database.list('/users');

    this.threads$.map(threads => {
      if (sessionStorage.getItem('chatToken')) {
        return threads.filter(thisCustomerThread => thisCustomerThread.$key == JSON.parse(sessionStorage.getItem('chatToken')).thread)
      }
      return
    }).subscribe(thisCustomerThread => {
      // console.log('ddd' + thisCustomerThread);
      if (thisCustomerThread) {
        this.thisCustomerThreadStatus = thisCustomerThread[0].threadStatus
        // console.log('ooo' + JSON.stringify(this.thisCustomerThreadStatus));
        if (this.thisCustomerThreadStatus == 'Chiuso') {
          sessionStorage.removeItem('chatToken');
          this.currentMessages = [];
          this.hideNameField = false;
          this.createForm.patchValue({
            message: "",
            name: ""
          });
        } else {
          this.hideNameField = true;
        }
        return this.thisCustomerThreadStatus;
      }
      return
    });

    this.messages$.map(messages => {
      if (sessionStorage.getItem('chatToken')) {
        return messages.filter(currentMessages => currentMessages.threadObjectId == JSON.parse(sessionStorage.getItem('chatToken')).thread)
      }
      return
    }).subscribe(currentMessages => {
      if (currentMessages) {
        this.currentMessages = currentMessages;
      }
    });
    
    this.createForm = _fb.group({
      'name': ['', []],
      'message': ['', [Validators.required]],
      'dateTime': new Date().toString()
    });

    _infosFromIpService.getInfosFromIp().map(data => JSON.parse(data._body)).subscribe(data => {
      this.cityFromIp = data.city;
      // console.log(this.cityFromIp);
    });
  }

  ngOnInit() {
  }

  testo(test){
    console.log('test is:', test);
  }
  // ngAfterContentChecked() {
  //   this.videoSize = {
  //     width: $('#mainImage').width(),
  //     height: $('#mainImage').height()
  //   }
  //   $('#customerChat').css({
  //     "position": "fixed",
  //     "width": "350px",
  //     "right": "0px",
  //     "top": (this.videoSize.height * 0.7),
  //     "overflow": "hidden",
  //     "z-index": "100",
  //     "margin-right": "20px"
  //   })
  //   // console.log('again width is: ' + $('#mainVideo').width() + ' again height is: ' + $('#mainVideo').height());
  // }

  maximizeWindow() {
    this.windowChatState = true;
  }

  minimizeWindow() {
    this.windowChatState = false;
  }

  closeWindow() {
    this.chatHide = true;
    this.emitChatHide.emit(true);
  }

  openWindow(bool) {
    this.chatHide = bool;
  }

  sendMessage() {
    if (!sessionStorage.getItem('chatToken')) {
      this.threads$.push({
        name: this.createForm.value.name,
        city: this.cityFromIp,
        date: new Date().toString(),
        openingDateTime: '',
        closingDateTime: '',
        threadStatus: 'In attesa',
        attendantFullName: '',
        attendantUserObjectId: ''
      }).then(threadObject => {
        // console.log(threadObject.path.o[2]);
        sessionStorage.setItem('chatToken', JSON.stringify({
          name: this.createForm.value.name,
          thread: threadObject.path.o[2]
        }));
        let obj = {
          threadObjectId: threadObject.path.o[2],
          name: this.createForm.value.name,
          message: this.createForm.value.message,
          dateTime: new Date().toString()
        }
        this.messages$.push(obj);
        // this.currentMessages.push(obj);
      });
      this.hideNameField = true;

    } else if (sessionStorage.getItem('chatToken')) {
      let obj = {
        threadObjectId: JSON.parse(sessionStorage.getItem('chatToken')).thread,
        name: JSON.parse(sessionStorage.getItem('chatToken')).name,
        message: this.createForm.value.message,
        dateTime: new Date().toString()
      }
      console.log('before' + JSON.stringify(this.currentMessages));
      this.messages$.push(obj);
      // this.currentMessages.push(obj);
      console.log('after' + JSON.stringify(this.currentMessages));
    };
    this.createForm.patchValue({
      message: ""
    });
  }

}


