import { ConnectionComponent } from './connection.component';
import { ConnectionService } from './connection.service';
import {MessengerService} from './messenger.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import {Messenger} from './messenger.component';


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
