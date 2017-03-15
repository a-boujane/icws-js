import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MessengerService} from '../services/messenger.service';
import { Session } from '../class/session';
import {Req} from '../class/req';

@Component({
    moduleId: module.id,
    selector: 'messenger',
    templateUrl: '../html/messenger.component.html',
    styleUrls: ['../css/messenger.component.css']
})
export class Messenger implements OnChanges{
    @Input()
    session: Session;
    @Input()
    requestTemplate:Req;
    url: string = "";
    methods=["GET","POST","PUT","DELETE"];
    selectedMethod=this.methods[0];
    headers="";
    body = "";
    responseCode:number;
    responseHeaders;
    responseBody:string;

    constructor(private messengerService:MessengerService) { }

    ngOnChanges(changes: SimpleChanges){
        this.updateStuff(changes["requestTemplate"].currentValue)
    }

    private updateStuff(requesty){
        if(requesty){
            this.body=JSON.stringify(requesty.data.body,undefined,4);
            this.selectedMethod=requesty.title;
            this.url=this.session.baseUrl+
                requesty.url.
                split("/index.htm#")[0].
                replace('(sessionId)',this.session.sessionId);
            this.headers="";
            requesty.data.headers.map(key=>{
                if(key!=="Cookie" && key!=="ININ-ICWS-CSRF-Token"){
                    this.headers+=key;
                    this.headers+=": placeholder,";
                }
            });
        }
    }

    onSelect(method){
        this.selectedMethod=method;
    }

    sendRequest() {
        this.messengerService
            .generalRequest(this.session, this.selectedMethod, this.url,this.headers, this.body)
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