import {Component, Input, OnInit} from '@angular/core';
import {IMessage} from '../../interfaces/imessage';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss']
})
export class UserMessageComponent implements OnInit {

  @Input('message') message: IMessage;

  constructor() { }

  ngOnInit() {
  }

}
