import { Injectable } from '@angular/core';
import {IMessage} from '../interfaces/imessage';
import {IResponse} from '../interfaces/iresponse';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chat: IMessage[] = [];
  public nameSet: boolean = false;
  public _id: string = '';

  constructor(
    private http: HttpClient
  ) { }


  public register(name) {

    this.http.post<IResponse>(environment.uri + '/user-register', { username: name })
      .subscribe(response => {
        if (response.success) {
          this._id = response.sessionId;
        }
      });

  }

  public sendMsg(name: string, msg: string) {

    if (msg === '' || name === '') {
      console.log('message empty');
      return;
    }

    this.http.post<IResponse>(environment.uri + '/user-message', {
      message: msg,
      name: name,
      sessionId: this._id
    }).subscribe((response: IResponse) => {
      if (response.success) {
        this.nameSet = true;
        console.log(response);
      }
    });

  }

  public adminSendMsg(msg: string) {

    if (msg === '') {
      console.log('message empty');
      return;
    }

    this.http.post<IResponse>(environment.uri + '/admin-message', {
      message: msg
    }).subscribe((response: IResponse) => {
      if (response.success) {
        this.nameSet = true;
      }
    });

  }

}
