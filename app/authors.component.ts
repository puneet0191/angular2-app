/**
 * Created by puneet on 29/4/17.
 */
import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
    template: `
        <h2>{{title}}</h2>
        <p>List of Authors</p>
        <ul>
            <li *ngFor="#authorName of authorNames">
                {{authorName}}
            </li>
        </ul>
    `,
    selector:'authors',
    providers: [AuthorService]
})
export class AuthorComponent{
    title = "Authors";
    authorNames;
    constructor(authorService: AuthorService){
        this.authorNames = authorService.getAuthorNames();
    }
}