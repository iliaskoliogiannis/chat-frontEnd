import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './components/chat/chat.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ChatTableComponent } from './components/chat-table/chat-table.component';
import { AdminMessageComponent } from './components/admin-message/admin-message.component';
import { UserMessageComponent } from './components/user-message/user-message.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';

const routes = [
  {
    path: '',
    component: ChatComponent
  },
  {
    path: 'admin',
    component: AdminTableComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatTableComponent,
    AdminMessageComponent,
    UserMessageComponent,
    AdminTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
