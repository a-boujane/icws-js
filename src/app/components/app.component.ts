import { Component } from '@angular/core';
import {Session} from '../class/session';
import {RequestService} from '../services/request.service';
import {PollingService} from '../services/polling.service';
@Component({
  selector: 'app-root',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent {
  request:Object;
  pollingMessage:Object;
  
  constructor(private requestService:RequestService, private pollingService:PollingService){
    requestService.requestSelected.subscribe((req=>{this.request=req;}));
    pollingService.messageReceived.subscribe((message=>{this.pollingMessage}))
  }
  loggedOn:boolean=false;
  session:Session=new Session();
}
