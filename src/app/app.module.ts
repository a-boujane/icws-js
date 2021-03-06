import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { ConnectionComponent } from './components/connection.component';
import { AppComponent } from './components/app.component';
import { Messenger } from './components/messenger.component';
import { NavigatorComponent } from './components/navigator.component'
import { TreeView } from './components/tree-view.component'

import { ConnectionService } from './services/connection.service';
import { MessengerService } from './services/messenger.service';
import { NavigatorService } from './services/navigator.service';
import { RequestService } from './services/request.service';
import { PollingService } from './services/polling.service';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    Messenger,
    NavigatorComponent,
    TreeView
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  ],
  providers: [ConnectionService,MessengerService,NavigatorService,RequestService,PollingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
