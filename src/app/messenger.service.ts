import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Session } from './class/session';

@Injectable()
export class MessengerService {
    constructor(private http:Http) { }

    customRequest(session, method, url, extraHeaders,body) {
        // body=JSON.parse(body);
        let headers=new Headers(session.headers);
        return this.getContent(session, url,body)
    }

    getContent(session,customUrl, customRequest){
        return this.http
            .get(customUrl,session.options)
            .map(resp=>resp);
    }

    postRequest(session,customUrl,customRequest){
        return this.http
            .post(customUrl,customRequest,session.options)
            .map(resp=>resp);
    }

    putRequest(session,customUrl,customRequest){
        return this.http
            .put(customUrl,customRequest,session.options)
            .map(resp=>resp);
    }

    deleteRequest(session,customUrl,customRequest){
        return this.http
            .delete(customUrl,session.options)
            .map(resp=>resp);
    }

}