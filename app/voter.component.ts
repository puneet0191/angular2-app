/**
 * Created by puneet on 29/4/17.
 */
import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'voter',
    template: `
    <div width="20px;">
        <i class="glyphicon glyphicon-menu-up"
        [class.isUpVoted]="isVoted" (click)="onUpClick($event)" ></i>
        <span>{{voteCount}}</span>
        <i class="glyphicon glyphicon-menu-down"
           [class.isDownVoted]="!isVoted" (click)="onDownClick($event)" ></i>
    </div>
    `,
    styles:[`
        .isUpVoted{
            color: orange;
        }
        .isDownVoted{
            color: orange;
        }
    `]
})
export class VoterComponent{
    @Input() voteCount = 0;
    @Input() isVoted = false;
    @Output() voteChange = new EventEmitter();

    onUpClick($event){

        if(!this.isVoted){
            this.isVoted = !this.isVoted;
            this.voteCount += 1;
            this.voteChange.emit({voteCount: this.voteCount});
        }
    }

    onDownClick($event){
        if(this.isVoted)
        {
            this.isVoted = !this.isVoted;
            this.voteCount -= 1;
            this.voteChange.emit({voteCount: this.voteCount})
        }
    }
}