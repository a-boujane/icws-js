import { Session } from './class/session';
import { Component, Input } from '@angular/core';


import { ConnectionService } from './connection.service';
import { User } from './class/user';
import { Server } from './class/server';

@Component({
    moduleId: module.id,
    selector: 'connection',
    templateUrl: './html/connection.component.html',
    styleUrls: ['./css/connection.component.css']
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
            err => console.log(err)
        );
    }

    startMessaging(resp): void {
        this.session.initializeNewLogin(resp);
        this.connectionService.startMessaging(this.session, resp, 2);
    }

}