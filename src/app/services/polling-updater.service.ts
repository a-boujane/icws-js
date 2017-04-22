import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class PollingUpdaterService {

    private receivedMessageSource = new Subject<Object>();

    messageReceived = this.receivedMessageSource.asObservable();

    selectRequest(data: Object){
        this.receivedMessageSource.next(data);
    }

}