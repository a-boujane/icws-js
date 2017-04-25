import { Component, Input } from '@angular/core';
import { Req } from '../class/req';
import {RequestService} from '../services/request.service';

@Component({
    moduleId: module.id,
    selector: 'tree-view',
    templateUrl: '../html/tree-view.component.html',
    styleUrls:['../css/tree-view.component.css']
})
export class TreeView  {
    @Input()
    tree:TreeView
    @Input()
    selectedNode;
    constructor(private requestService:RequestService){

    }
    setSelectedNode(node){
        if(node.data)
            this.requestService.selectRequest(node);
        
        else {
            if(node!==this.selectedNode){
                this.selectedNode=node;
            }
            else
                this.selectedNode=null;
        }
    }
}