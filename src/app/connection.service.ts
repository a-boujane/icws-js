import { Observer } from '@angular-cli/ast-tools/node_modules/rxjs/Rx';
import { ConnectionResponse } from './connection-response';
import { ConnectionComponent } from './connection.component';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { User } from './user';
import { Server } from './server';
import { Session } from './session';

@Injectable()
export class ConnectionService {
    session: Session = new Session();
    constructor(private http: Http) { }

    login(user: User, server: Server) {

        let url = this.session.setBaseUrl(server);
        let body = this.session.getLoginBody(user);
        let options = this.session.getOptions();
        return this.http
            .post(url + "/connection", body, options)
            .map(resp => resp.json());
    }


    startMessaging(loginData,pollingInterval) {
        console.log("started StartMessaging");
        console.log("Here is some Login Data");
        console.log(loginData);
        this.session.initializeNewLogin(loginData);
        setInterval(this.checkMessaging, 1000*pollingInterval,this);
    }

    checkMessaging(self) {
        console.log("Started Checking Messaging");
        console.log(self.session);
        let url = self.session.getMessagingUrl();
        console.log("doesn't looklike we got SHIZ!");

        let options = self.session.getOptions();
        console.log(url);
        console.log(options);
        return self.http.get(url, options)
            .map(resp => resp.json())
            .subscribe(
            resp => resp.json().data,
            err => console.log(err.json())
            );
    }





}