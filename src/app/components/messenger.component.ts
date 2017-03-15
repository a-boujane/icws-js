import { Component, OnInit, Input } from '@angular/core';
import {MessengerService} from '../services/messenger.service';
import { Session } from '../class/session';
import {Req} from '../class/req';

@Component({
    moduleId: module.id,
    selector: 'messenger',
    templateUrl: '../html/messenger.component.html',
    styleUrls: ['../css/messenger.component.css']
})
export class Messenger {
    @Input()
    session: Session;
    @Input()
    request:Req;
    url: string = "";
    methods=["GET","POST","PUT","DELETE"];
    selectedMethod=this.methods[0];
    headers="";
    body = "";
    responseCode:number;
    responseHeaders;
    responseBody:string;

    constructor(private messengerService:MessengerService) { }

    onSelect(method){
        this.selectedMethod=method;
    }

    sendRequest() {
        this.messengerService
            .generalRequest(this.session, this.selectedMethod, this.session.sampleUrl,this.request.headers, this.request.body)
            .subscribe(
            resp=>{
                this.responseCode=resp.status;
                this.responseHeaders= JSON.stringify(resp.headers.toJSON(), undefined, 4);
                this.responseBody = JSON.stringify(resp.json(), undefined, 4);
                return;
            },
            resp=>{
                this.responseCode=resp.status;
                this.responseHeaders= JSON.stringify(resp.headers.toJSON(), undefined, 4);
                this.responseBody = JSON.stringify(resp.json(), undefined, 4);
                return;
            }
            );
    }

}