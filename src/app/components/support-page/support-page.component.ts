import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AttendantSupportChatComponent } from '../attendant-support-chat/attendant-support-chat.component';
import { Thread } from '../../shared/thread';
import { User } from '../../shared/user';
import { Message } from '../../shared/message';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.scss']
})
export class SupportPageComponent implements OnInit {
  threads$: FirebaseListObservable<any>;
  messages$: FirebaseListObservable<any>;
  users$: FirebaseListObservable<any>;

  messages: Message[];
  attendantUser: User;

  modalMessages: Message[];
  modalTitle: string;

  threads: Thread[];
  activeThreads: Thread[];
  thisUserThreads: Thread[] = [];
  thisUserActiveThreads: Thread[] = [];
  threadToUpdate: Thread[]
  threadIdToClose: string;
  thisUserAssistedThreads: string[] = [];

  constructor(public _af: AngularFire) {
    this.users$ = _af.database.list('user');
    this.threads$ = _af.database.list('chat/threads');
    this.messages$ = _af.database.list('chat/messages');

    this.users$
      .map(data => data.filter(data => data.email == JSON.parse(localStorage.getItem('currentUser')).username))
      .subscribe(user => {
        this.attendantUser = user[0];
        console.log('attendantUser key' + JSON.stringify(user[0].$key));
      });

    this.threads$.map(threads => {
      this.threads = threads;
      this.activeThreads = this.threads.filter(activeThreads => activeThreads.closingDateTime == '');
      console.log('activeThreads' + JSON.stringify(this.activeThreads));
      this.thisUserThreads = threads.filter(thisUserThreads => thisUserThreads.attendantUserObjectId == this.attendantUser.$key);
      console.log('thisUserThreads' + JSON.stringify(this.thisUserThreads));
      this.thisUserActiveThreads = this.thisUserThreads.filter(thisUserActiveThreads => thisUserActiveThreads.closingDateTime == '');
      console.log('thisUserActiveThreads' + JSON.stringify(this.thisUserActiveThreads));
      return this.thisUserActiveThreads;
    }).subscribe();
  };

  ngOnInit() {

  }

  assistCustomer(threadObjectId) {
    this.threads$.update(threadObjectId, {
      attendantFullName: this.attendantUser.firstname + ' ' + this.attendantUser.lastname,
      attendantUserObjectId: this.attendantUser.$key,
      threadStatus: 'In corso',
      openingDateTime: new Date().toString()
    });
  }

  closeChat(threadObjectId) {
    this.threads$.update(threadObjectId, {
      closingDateTime: new Date().toString(),
      threadStatus: 'Chiuso',
    });
  }

  seeChat(threadObjectId){
    this.threads$.subscribe(data => this.modalTitle = 'Aperta: ' + data.openingDateTime + '- Da: ' + data.name + ' - Gestita da: ' + data.attendantFullName);
    this.messages$.map(data => data.filter(data => data.threadObjectId == threadObjectId))
        .subscribe(msg => {
          this.modalMessages = msg;
        });
  };

}
