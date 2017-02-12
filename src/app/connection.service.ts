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


    startMessaging(loginData) {
        this.session.initializeNewLogin(loginData);
        setInterval(this.checkMessaging, 1000);
    }

    checkMessaging() {
        return this.http
            .get(this.session.getMessagingUrl(), this.session.getOptions())
            .map(resp => resp.json())
            .subscribe(
            resp => resp.json().data,
            err => console.log(err.json())
            );
    }





}