import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Session } from '../class/session';


@Injectable()
export class PollingService {

    constructor(private http: Http) {}

    private receivedMessageSource = new Subject<Object>();

    messageReceived = this.receivedMessageSource.asObservable();

    parseMessage(data: any){
        if(data.length!==0){
            this.receivedMessageSource.next(data);
        }
    }

    startMessaging(session:Session, pollingInterval:number) {
        setInterval(this.checkMessaging, 1000 * pollingInterval, this,session);
    }

    checkMessaging(self,session:Session) {
        let url = session.getMessagingUrl();
        let options = session.getOptions();
        return self.http.get(url, options)
            .map(resp => resp.json())
            .subscribe(
            (resp)=>{self.parseMessage(resp);},
            err => console.log(err.json())
            );
    }
}