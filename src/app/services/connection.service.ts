import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/timeout'

import { User } from '../class/user';
import { Server } from '../class/server';
import { Session } from '../class/session';

@Injectable()
export class ConnectionService {
    constructor(private http: Http) { }

    login(session, user: User, server: Server) {
        let url = session.setBaseUrl(server);
        let body = session.getLoginBody(user);
        let options = session.getOptions();
        return this.http
            .post(url + "icws/connection", body, options)
            .timeout(10000)
            .map(resp => resp.json());
    }
}