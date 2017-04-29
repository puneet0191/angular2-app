/**
 * Created by puneet on 29/4/17.
 */
import {Injectable} from 'angular2/core'

@Injectable()

export class AuthorService{
    authorName = ["Puneet", "Raghav", "Drasti"];
    getAuthorNames(){
        return this.authorName;
    }
}