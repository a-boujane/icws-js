import { Component, OnInit } from '@angular/core';

import {ConnectionService} from './connection.service';
import {User} from './user';
import {Server} from './server';

@Component({
    moduleId: module.id,
    selector: 'connection',
    templateUrl: 'connection.component.html'
})
export class ConnectionComponent implements OnInit {
    user:User;
    server:Server;
    constructor(private connectionService:ConnectionService) { }

    ngOnInit() { }

    login():void{
        this.connectionService.login(this.user,this.server);
    }

}