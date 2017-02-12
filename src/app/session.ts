import { Headers, RequestOptions } from '@angular/http';
import { User } from './user';

export class Session {
    user: User;
    sessionId: string;
    csrfToken: string;
    baseUrl: string;
    headers = new Headers({
        "Accept-Language": "en-US"
    });
    options = new RequestOptions({ headers: this.headers });

    getOptions(): RequestOptions {
        return this.options;
    }

    getMessagingUrl(): string {
        return this.baseUrl + "/" + this.sessionId + "/messaging/messages";
    }
    setBaseUrl(server): string {
        this.baseUrl = "http://" + server + ":8018/icws";
        return this.baseUrl;
    }

    getLoginBody(user: User) {
        this.user = user;
        return JSON.stringify({
            "__type": "urn:inin.com:connection:icAuthConnectionRequestSettings",
            "applicationName": "Icws-Js",
            "userID": this.user.username,
            "password": this.user.password
        });
    }

    initializeNewLogin(newHeaders) {
        this.headers.append("csrfToken", newHeaders.get("csrfToken").toString());
        this.headers.append("sessionId", newHeaders.get("sessionId").toString());
        this.options = new RequestOptions({ headers: this.headers });
    }

}
