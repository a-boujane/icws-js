import { Session } from '../class/session';
import { Component, Input } from '@angular/core';
import {Response} from '@angular/http';
import {MdSnackBar} from '@angular/material';


import { ConnectionService } from '../services/connection.service';
import { User } from '../class/user';
import { Server } from '../class/server';

@Component({
    moduleId: module.id,
    selector: 'connection',
    templateUrl: '../html/connection.component.html',
    styleUrls: ['../css/connection.component.css']
})
export class ConnectionComponent {
    user: User = new User();
    server: Server = new Server();
    trying:boolean=false;
    @Input()
    session: Session;


    constructor(private connectionService: ConnectionService, public snackBar: MdSnackBar) { }

    login(): void {
        this.trying=true;
        let connectionResponse = this.connectionService.login(this.session, this.user, this.server);
        connectionResponse.subscribe(
            resp =>this.loggedInSuccessfully(resp),
            err => this.errorHandler(err)
        );
    }

    loggedInSuccessfully(resp){
        this.trying=false;
        this.throwMessage("You are now logged in as "+this.user.username);
        this.session.initializeNewLogin(resp);
    }

    errorHandler(err:Response){
        this.trying=false;
        if (err.status==503){
            this.server.serverName=err.json().alternateHostList[0];
            this.login();
        }
        else if (err.status==0)
            this.throwMessage("Unable to reach "+this.server.serverName);
        else if (err.json)
            this.throwMessage(err.json().message);
        else
            this.throwMessage(err.toString());
    }


    onPasswordKey(event){
        if(event.key==="Enter")
            this.login();
    }

    throwMessage(message: string) {
    this.snackBar.open(message,"Close",{duration: 3000});
  }
}