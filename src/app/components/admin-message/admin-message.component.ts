import {Component, Input, OnInit} from '@angular/core';
import {IMessage} from '../../interfaces/imessage';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.scss']
})
export class AdminMessageComponent implements OnInit {

  @Input('message') message: IMessage;

  constructor() { }

  ngOnInit() {
  }

}
