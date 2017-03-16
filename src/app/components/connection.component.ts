import { Session } from '../class/session';
import { Component, Input } from '@angular/core';
import {Response} from '@angular/http';


import { ConnectionService } from '../services/connection.service';
import { User } from '../class/user';
import { Server } from '../class/server';

@Component({
    moduleId: module.id,
    selector: 'connection',
    templateUrl: '../html/connection.component.html',
    styleUrls: ['../css/connection.component.css']
})
export class ConnectionComponent {
    user: User = new User();
    server: Server = new Server();
    @Input()
    session: Session;


    constructor(private connectionService: ConnectionService) { }

    login(): void {
        let connectionResponse = this.connectionService.login(this.session, this.user, this.server);
        connectionResponse.subscribe(
            resp => this.startMessaging(resp),
            err => this.errorHandler(err)
        );
    }

    errorHandler(err:Response){
        if (err.status==503){
            this.server.serverName=err.json().alternateHostList[0];
            this.login();
        }
    }

    startMessaging(resp): void {
        this.session.initializeNewLogin(resp);
        this.connectionService.startMessaging(this.session, resp, 2);
    }

    onPasswordKey(event){
        if(event.key==="Enter")
            this.login();
    }
}