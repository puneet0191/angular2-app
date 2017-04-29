/**
 * Created by puneet on 29/4/17.
 */
import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles:[`
        .glyphicon-star{ color: orange;}
    `]
})
export class FavoriteComponent{
    @Input() isFavorite = true;
    @Output() change = new EventEmitter();

    onClick($event){
        if(!this.isFavorite)
        {
            this.isFavorite = true;
        }
        else
        {
            this.isFavorite = false;
        }
        this.change.emit({newValue: this.isFavorite});
    }
}