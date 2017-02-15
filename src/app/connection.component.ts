import { Session } from './session';
import { Component } from '@angular/core';

import { ConnectionService } from './connection.service';
import { User } from './user';
import { Server } from './server';

@Component({
    moduleId: module.id,
    selector: 'connection',
    templateUrl: 'connection.component.html',
    styleUrls: ['connection.component.css']
})
export class ConnectionComponent {
    user: User = new User();
    server: Server = new Server();
    session: Session = new Session();

    pollingInterval = 2;

    loggedOut = true;

    customUrl: string = "";
    customBody = `
    {
        "item1": "value1",
        "item2": "value2"
    }`;
    customMethod: string = "";

    customResponseBody = {
        "orderNumber": 1,
        "customerId": "-513165213",
        "shoppingCartId": 123654789651,
        "firstName": "UserName"
    };
    customRespomseBodyString=JSON.stringify(this.customResponseBody,undefined,4);
    customResponseHeaders = "";

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
        this.customUrl = this.session.baseUrl + "/"+this.session.sessionId+"/activations/users/"+this.user.username;
        this.loggedOut = false;
        this.connectionService.startMessaging(this.session, resp, this.pollingInterval);
    }

    sendCustomRequest() {
        console.log("Called Custom Request");
        console.log(this.customResponseBody);
        this.connectionService
            .customRequest(this.session, this.customMethod, this.customUrl, this.customBody)
            .subscribe(
                resp => this.customRespomseBodyString = JSON.stringify(resp.json(),undefined,4),
                resp => this.customRespomseBodyString = JSON.stringify(resp.json(),undefined,4)
                );
    }

}