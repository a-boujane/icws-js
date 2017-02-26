import { Component } from '@angular/core';
import {Session} from './session';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedOn:boolean=false;
  session:Session=new Session();;
}
