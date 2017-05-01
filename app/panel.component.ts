/**
 * Created by puneet on 30/4/17.
 */
import {Component, Input} from 'angular2/core'

@Component({
    selector:'bs-panel',
    template:`
    <div class="panel panel-default">
        <div class="panel-heading" (click)="onHeaderClick($event)">
            {{header}}
            <i class="pull-right glyphicon" [ngClass]="{
                'glyphicon-chevron-down': isHidden,
                'glyphicon-chevron-up' : !isHidden
            }"></i>
        </div>
        <div class="panel-body" *ngIf="!isHidden">
            <ng-content select=".body"></ng-content>
        </div>
        
    </div>
    
    `
})
export class PanelComponent{
    @Input() header: string;
    isHidden = true;

    onHeaderClick($event){
        this.isHidden = !this.isHidden;
    }
}