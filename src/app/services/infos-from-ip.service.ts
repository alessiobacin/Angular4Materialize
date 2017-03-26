import { Injectable } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class InfosFromIpService {
  infosFromIp: Observable<any>;

  constructor(private _http: Http) {
    this.infosFromIp = this._http.get('http://freegeoip.net/json/');
    
  }

  getInfosFromIp(): Observable<any>{
        return this.infosFromIp;
  }
}
