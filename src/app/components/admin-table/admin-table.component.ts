import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {WebSocketService} from '../../services/web-socket.service';
import {IMessage} from '../../interfaces/imessage';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IResponse} from '../../interfaces/iresponse';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit {

  public msg

  constructor(
    private wss: WebSocketService,
    private cs: ChatService,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.wss.listen('adminFullChat')
      .subscribe((data: IMessage[]) => {
        this.cs.chat = data;
        console.log(this.cs.chat);
      });

  }

  public delete(id) {
    this.http.post<IResponse>(environment.uri + '/admin-delete-post', { _id: id})
      .subscribe(response => {
        console.log(response);
      });
  }

}
