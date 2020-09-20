import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chat-table',
  templateUrl: './chat-table.component.html',
  styleUrls: ['./chat-table.component.scss']
})
export class ChatTableComponent implements OnInit {

  constructor(
    private cs: ChatService
  ) { }

  ngOnInit() {
  }

}
