import { ConnectionService } from './services/connection.service';
import {MessengerService} from './services/messenger.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';

import { ConnectionComponent } from './components/connection.component';
import { AppComponent } from './components/app.component';
import {Messenger} from './components/messenger.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    Messenger
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [ConnectionService,MessengerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
