import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class RequestService {

    private selectedRequestSource = new Subject<Object>();

    requestSelected = this.selectedRequestSource.asObservable();

    selectRequest(data: Object){
        this.selectedRequestSource.next(data);
    }

}