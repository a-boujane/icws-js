import { Component, Input } from '@angular/core';
import { Req } from '../class/req'
@Component({
    moduleId: module.id,
    selector: 'tree-view',
    templateUrl: '../html/tree-view.component.html'
})
export class TreeView  {
    @Input()
    private tree:TreeView
    @Input()
    selectedNode;

    setSelectedNode(node){
        if(node!==this.selectedNode){
            this.selectedNode=node;
        }
        else
            this.selectedNode=null;
    }
}