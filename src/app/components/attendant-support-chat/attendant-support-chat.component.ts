import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Message } from '../../shared/message';
import { User } from '../../shared/user';

@Component({
  selector: 'app-attendant-support-chat',
  templateUrl: './attendant-support-chat.component.html',
  styleUrls: ['./attendant-support-chat.component.scss']
})
export class AttendantSupportChatComponent implements OnInit {
  messages$: FirebaseListObservable<any>;
  users$: FirebaseListObservable<any>;
  messages: Message[];
  assistantMessages: Message[];
  createForm: any;
  attendantUser;

  @Input()
  thisUserThreads;


  constructor(public fb: FormBuilder, public _af: AngularFire) {
    this.users$ = _af.database.list('user');
    this.createForm = fb.group({
      'message': ['', [Validators.required, Validators.minLength(4)]],
      'dateTime': new Date().toString(),
      'attendantUser': ''
    });
    this.attendantUser = this.users$.map(data => data.filter(data => data.email == JSON.parse(localStorage.getItem('currentUser')).username))

    this.messages$ = _af.database.list('chat/messages');
    

    // console.log('mmm'+this.attendantUser);
  }

  ngOnInit() {
    if (this.thisUserThreads) {
      this.messages$.map(data => data.filter(data => data.threadObjectId == this.thisUserThreads.$key))
        .subscribe(msg => {
          this.messages = msg;
        });
    }
  }

  sendMessage() {
    this.attendantUser.subscribe(user => {
      let obj = {
        threadObjectId: this.thisUserThreads.$key,
        attendantUserObjectId: user[0].$key,
        name: user[0].firstname + ' ' + user[0].lastname,
        message: this.createForm.value.message,
        dateTime: new Date().toString()
      }
      this.messages$.push(obj);
    });
    this.createForm.patchValue({
      message: "",
    });
  }
}
