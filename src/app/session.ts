import { Headers, RequestOptions } from '@angular/http';
import { User } from './user';

export class Session {

    user: User;
    sessionId: string;
    csrfToken: string;
    baseUrl: string;
    loggedOn:boolean=false;
    headers = new Headers({
        "Accept-Language": "en-US"
    });
    options = new RequestOptions({ headers: this.headers, withCredentials: true });

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
        console.log("trying to log user"+user.username);
        return JSON.stringify({
            "__type": "urn:inin.com:connection:icAuthConnectionRequestSettings",
            "applicationName": "Icws-Js",
            "userID": this.user.username,
            "password": this.user.password
        });
    }

    initializeNewLogin(newHeaders) {
        console.log("Entering NewLoginInitialization");
        console.log(this.headers);
        console.log(this.options);
        this.sessionId = newHeaders.sessionId.toString();
        this.csrfToken = newHeaders.csrfToken.toString();
        this.headers.append("sessionId", this.sessionId);
        this.headers.append("ININ-ICWS-CSRF-Token", this.csrfToken);
        this.options = new RequestOptions({ headers: this.headers, withCredentials: true }, );
        this.loggedOn = true;
        console.log("created new session id: "+this.sessionId);
        console.log(this.options);

    }

}
