import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Session } from './session';

@Injectable()
export class MessengerService {
    constructor(private http:Http) { }

    customRequest(session, customMethod, customUrl, customRequest) {
        return this.getContent(session, customUrl,customRequest)
    }

    getContent(session,customUrl, customRequest){
        console.log("inside getContent");
        console.log(this.http);
        return this.http
            .get(customUrl,session.options)
            .map(resp=>resp);

    }
}