import { Component } from '@angular/core';
import {Session} from './class/session';
@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent {
  loggedOn:boolean=false;
  session:Session=new Session();;
}
