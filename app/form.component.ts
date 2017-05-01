/**
 * Created by puneet on 30/4/17.
 */
import {Component} from 'angular2/core'

@Component({
    selector: 'form',
    templateUrl: 'app/form.component.html',
    styles:[`
    .ng-touched.ng-invalid{
        border: 1px solid red;
    }
    `]
})
export class FormComponent{

    log(email){
        console.log(email);
    }

}