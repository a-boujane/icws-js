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
    secureHeaders=this.headers;
    options = new RequestOptions({ headers: this.headers , withCredentials: true});

    getOptions(): RequestOptions {
        return this.options;
    }

    getMessagingUrl(): string {
        return this.baseUrl + "/" + this.sessionId + "/messaging/messages";
    }
    setBaseUrl(server): string {
        this.baseUrl = "http://" + server.serverName + ":8018/icws";
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
        this.sessionId = newHeaders.sessionId.toString();
        this.csrfToken = newHeaders.csrfToken.toString();
        // this.secureHeaders.append("csrfToken", this.csrfToken);
        this.headers.append("sessionId", this.sessionId);
        // this.secureHeaders.append("sessionId", this.sessionId);

        this.options = new RequestOptions({ headers: this.headers ,withCredentials: true},);
    }

}
