import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tree-view',
    templateUrl: '../html/tree-view.component.html'
})
export class TreeView  {
    @Input()
    tree

}