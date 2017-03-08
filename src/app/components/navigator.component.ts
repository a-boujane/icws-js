import { Component, OnInit } from '@angular/core';
import {NavigatorService} from '../services/navigator.service'

@Component({
    moduleId: module.id,
    selector: 'navigator',
    templateUrl: '../html/navigator.component.html',
    styleUrls:['../css/navigator.component.css']
})
export class NavigatorComponent implements OnInit {
    
    tree={};
    selectedItem={}
    
    constructor(private navigator:NavigatorService) { }

    ngOnInit() { 
        this.navigator.fetchElements()
        .subscribe(resp=>{
            this.tree=resp.json();
        });
    }
}