import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Session } from '../class/session';

@Injectable()
export class MessengerService {
    constructor(private http:Http) { }

    generalRequest(session:Session, method:string, url:string, extraHeaders:string,body:string) {
        method=method.toLowerCase();
        let headers=new Headers(session.headers);
        let tempHeaders=extraHeaders.split(",");
        tempHeaders.map(header=>{
            let intermediate=header.split(":");
            if(intermediate.length>1)
                headers.append(intermediate[0],intermediate[1]);
            return;
        });
        let options=new RequestOptions({ method:method,headers: headers,body:body, url:url,withCredentials: true }, );
        debugger;
        return this.call(url,options)
    }

    
    call(url:string, options:RequestOptions){
        return this.http.request(url,options)
            .map(resp=>resp);
    }
}