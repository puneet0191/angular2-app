/**
 * Created by puneet on 29/4/17.
 */
import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
    selector: 'heart',
    templateUrl: 'app/heart.template.html',
    styles:[`
        .glyphicon{
            cursor: pointer;
        }
        .glyphicon-heart-empty{
            color: lightgray;
        }
        .glyphicon-heart{
            color: deeppink;
        }
    `]
})
export class HeartComponent{
     @Input() isHeart = false;
     @Output() changeCount = new EventEmitter();

     onClick($event){
         this.isHeart = !this.isHeart;
         this.changeCount.emit({heart: this.isHeart});
     }
}