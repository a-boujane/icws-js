import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { MessengerService } from '../services/messenger.service';
import { PollingService } from '../services/polling.service';
import { Session } from '../class/session';
import { Req } from '../class/req';

@Component({
    moduleId: module.id,
    selector: 'messenger',
    templateUrl: '../html/messenger.component.html',
    styleUrls: ['../css/messenger.component.css']
})
export class Messenger implements OnChanges, AfterViewInit {
    @Input()
    session: Session;
    @Input()
    requestTemplate: Req;
    pollingMessage: Object;
    url: string = "";
    methods: string[] = ["GET", "POST", "PUT", "DELETE"];
    selectedMethod: string = this.methods[0];
    headers: string = "";
    query_params: string[] = [];
    selected_query_params: string[] = [];
    body: string = "";
    messaging;
    responseCode: number;
    responseHeaders;
    responseBody: string;

    constructor(private messengerService: MessengerService, private pollingService: PollingService) { }

    ngOnChanges(changes: SimpleChanges) {
        this.updateStuff(changes["requestTemplate"].currentValue)
    }

    private updateMessaging(self, message) {
        self.messaging = JSON.stringify(message[0], undefined, 4);
    }

    private updateStuff(requesty) {
        if (requesty) {
            this.body = JSON.stringify(requesty.data.body, undefined, 4);
            this.selectedMethod = requesty.title;
            this.query_params = requesty.data.query_params;
            this.selected_query_params = [];
            this.url = this.session.baseUrl +
                requesty.url.
                    split("/index.htm#")[0].
                    replace('(sessionId)', this.session.sessionId);
            this.headers = "";
            requesty.data.headers.map(key => {
                if (key !== "Cookie" && key !== "ININ-ICWS-CSRF-Token") {
                    this.headers += key;
                    this.headers += ": *placeholder,";
                }
            });
        }
    }

    onSelect(method) {
        this.selectedMethod = method;
    }

    addOrRemoveQuery(query: string, urlElement) {
        if (this.selected_query_params.indexOf(query) >= 0)
            this.removeQuery(query);
        else
            this.addQuery(query);
        setTimeout((urlElement) => {
            urlElement.focus();
            urlElement[0].setSelectionRange(this.url.length, this.url.length);
        }, 200, urlElement);
    }

    private removeQuery(query: string) {
        let re = RegExp(query + '=[^&]*');
        this.url = this.url.replace(re, "");
        this.url = this.url.replace("&&", "&");
        this.url = this.url.replace("?&", "?");
        if (this.url.endsWith("?") || this.url.endsWith("&")) {
            this.url = this.url.slice(0, this.url.length - 1);
        }
        let index = this.selected_query_params.indexOf(query);
        this.selected_query_params.splice(index, 1);
    }

    private addQuery(query: string) {
        if (this.selected_query_params.length === 0)
            this.url += "?";
        else
            this.url += "&";
        this.selected_query_params.push(query);
        this.url += query + "=";
    }

    sendRequest() {
        this.responseCode = null;
        this.responseHeaders = null;
        this.responseBody = null;

        this.messengerService
            .generalRequest(this.session, this.selectedMethod, this.url, this.headers, this.body)
            .subscribe(
            resp => {
                this.responseCode = resp.status;
                this.responseHeaders = JSON.stringify(resp.headers.toJSON(), undefined, 4);
                this.responseBody = JSON.stringify(resp.json(), undefined, 4);
                return;
            },
            resp => {
                this.responseCode = resp.status;
                this.responseHeaders = JSON.stringify(resp.headers.toJSON(), undefined, 4);
                this.responseBody = JSON.stringify(resp.json(), undefined, 4);
                return;
            }
            );
    }

    logout() {
        let method: string = "DELETE";
        let url: string = this.session.baseUrl + "icws/" + this.session.sessionId + "/connection/";
        this.messengerService
            .generalRequest(this.session, method, url, "", "")
            .subscribe(
            resp => location.reload(true),
            () => location.reload(true)
            );
    }

    startMessaging(): void {
        this.pollingService.startMessaging(this.session, 2);
    }

    ngAfterViewInit() {
        this.startMessaging();
        this.pollingService.messageReceived.subscribe((message => this.updateMessaging(this, message)));
    }

}