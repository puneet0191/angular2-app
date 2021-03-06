import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorComponent} from './authors.component'
import {TweetComponent} from "./tweet.component"
import {PanelComponent} from "./panel.component";
import {FormComponent} from "./form.component";
import {SignUpFormComponent} from "./signup-form.component";
import {ChangePasswordComponent} from "./change-password.component";
// import {changePasswordComponent} from './change-password.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <courses></courses>
        <authors></authors>
        <tweet></tweet>
        <bs-panel header="This is first title"><div class="body"> This is the body</div></bs-panel>
        <form></form>
        <signup-form></signup-form>
        <change-password></change-password>
        
    `,
    directives: [CoursesComponent, AuthorComponent, TweetComponent, PanelComponent, FormComponent, SignUpFormComponent, ChangePasswordComponent]
})
export class AppComponent { }