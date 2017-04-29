/**
 * Created by puneet on 29/4/17.
 */
import {Component} from 'angular2/core'
import {AuthorService} from './author.service'
import {FavoriteComponent} from './favorite.component'
import {VoterComponent} from './voter.component'

@Component({
    template: `
        <h2>{{title}}</h2>
        <p>List of Authors</p>
        <ul>
            <li *ngFor="#authInfo of authorInfo">
                {{authInfo.authorName}}<favorite [isFavorite]="authInfo.isFavorite" (change)="onFavoriteClick($event)"></favorite>
            </li>
        </ul>
        <h3>Vote Component</h3>
        <voter [voteCount]="0" [isVoted]="true" (voteChange)="onVoteClick($event)"></voter>
    `,
    selector:'authors',
    providers: [AuthorService],
    directives: [FavoriteComponent, VoterComponent]
})
export class AuthorComponent{
    title = "Authors";
    authorNames;
    authorInfo;
    fullStar = 1;
    emptyStar = 0;

    constructor(authorService: AuthorService){
        this.authorInfo = authorService.getAuthorInfo();
        this.authorNames = authorService.getAuthorNames();
    }

    onClick($event){

        console.log("Inside");
        if(this.fullStar == 1)
        {
            this.emptyStar = 1;
            this.fullStar = 0;
        }
        else{
            this.emptyStar = 0;
            this.fullStar = 1;
        }
    }

    onFavoriteClick($event){
        console.log($event);
    }

    onVoteClick($event){
        console.log($event);
    }

}