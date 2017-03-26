import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class QuerydbService {
  customers: FirebaseListObservable<any[]>;
  constructor(private http: Http, public fb: AngularFire) {
  }
  getCustomers(salesFilter?) {
    const response = this.http.get('http://localhost:8080').map(res => res.json());
    return response;
  }

}
