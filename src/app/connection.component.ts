import { Component, OnInit } from '@angular/core';

import { ConnectionService } from './connection.service';
import { User } from './user';
import { Server } from './server';

@Component({
    moduleId: module.id,
    selector: 'connection',
    templateUrl: 'connection.component.html'
})
export class ConnectionComponent implements OnInit {
    user: User = new User();
    server: Server = new Server();
    pollingInterval=2;
    connectionData;
    constructor(private connectionService: ConnectionService) { }

    ngOnInit() { }

    login(): void {
        let connectionResponse = this.connectionService.login(this.user, this.server);
        connectionResponse.subscribe(
            resp => this.startMessaging(resp),
            err => console.log(err)
        );

    }

    startMessaging(resp): void {
        console.log("StartMessaging");
        console.log(resp)
        this.connectionService.startMessaging(resp,this.pollingInterval);
    }

}