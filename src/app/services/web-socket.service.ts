import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socket: any;

  constructor() {
    this.socket = io(environment.uri);
  }

  public listen(eventName: string) {
    return new Observable(subscriber => {
      this.socket.on(eventName, data => {
        subscriber.next(data);
      });
    });
  }

}
