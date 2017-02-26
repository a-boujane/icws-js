import { ConnectionComponent } from './connection.component';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { User } from './user';
import { Server } from './server';
import { Session } from './session';

@Injectable()
export class ConnectionService {
    constructor(private http: Http) { }

    login(session, user: User, server: Server) {
        let url = session.setBaseUrl(server);
        let body = session.getLoginBody(user);
        let options = session.getOptions();
        return this.http
            .post(url + "/connection", body, options)
            .map(resp => resp.json());
    }

    startMessaging(session,loginData, pollingInterval) {
        console.log("this is inside startMessaging - connection.service");
        console.log(this.http);
        setInterval(this.checkMessaging, 1000 * pollingInterval, this,session);
    }

    checkMessaging(self,session) {
        let url = session.getMessagingUrl();
        let options = session.getOptions();
        return self.http.get(url, options)
            .map(resp => resp.json())
            .subscribe(
            ()=>{},
            err => console.log(err.json())
            );
    }

}