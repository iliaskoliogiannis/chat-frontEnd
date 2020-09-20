import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../services/web-socket.service';
import {IMessage} from '../../interfaces/imessage';
import {ChatService} from '../../services/chat.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IResponse} from '../../interfaces/iresponse';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public msg: string = '';
  public name: string = '';

  constructor(
    private wss: WebSocketService,
    private cs: ChatService,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.wss.listen('fullChat')
      .subscribe((data: IMessage[]) => {
        this.cs.chat = data;
        console.log(this.cs.chat);
      });

  }

}
