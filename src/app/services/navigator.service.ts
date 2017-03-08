import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NavigatorService {

    url="ultimate.json";
    constructor(private http:Http) { }
    
    fetchElements():Observable<Response>{
        return this.http.get(this.url)
    }

}