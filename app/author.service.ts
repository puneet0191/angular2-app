/**
 * Created by puneet on 29/4/17.
 */
import {Injectable} from 'angular2/core'

@Injectable()

export class AuthorService{
    authorName = ["Puneet", "Raghav", "Drasti"];
    authorInfo = [
        {authorName: "Puneet", isFavorite: false},
        {authorName: "Raghav", isFavorite: false},
        {authorName: "Drasti", isFavorite: true}
    ];
    getAuthorNames(){
        return this.authorName;
    }
    getAuthorInfo(){
        return this.authorInfo;
    }
}