import { Component, OnInit } from '@angular/core';
import {NavigatorService} from '../services/navigator.service'

import {Debug} from '../class/debug-data'

@Component({
    moduleId: module.id,
    selector: 'navigator',
    templateUrl: '../html/navigator.component.html',
    styleUrls:['../css/navigator.component.css']
})
export class NavigatorComponent implements OnInit {
    deb:Debug = new Debug();
    tree=this.deb.data;
    selectedItem={}
    
    constructor(private navigator:NavigatorService) { }

    ngOnInit() { 
        // this.navigator.fetchElements()
        // .subscribe(resp=>{
        //     this.tree=resp.json();
        // });
    }
}