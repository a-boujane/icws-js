import { Component, OnInit, Input } from '@angular/core';
import{Session} from './session';
@Component({
    moduleId: module.id,
    selector: 'messenger',
    templateUrl: './messenger.component.html',
    styleUrls: ['./messenger.component.css']
})
export class Messenger implements OnInit {
    @Input()
    session:Session;

    constructor() { }

    ngOnInit() { }
}