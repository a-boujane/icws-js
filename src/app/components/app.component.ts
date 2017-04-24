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
  
  constructor(private requestService:RequestService){
    requestService.requestSelected.subscribe((req=>{this.request=req;}));
  }
  loggedOn:boolean=false;
  session:Session=new Session();
}
