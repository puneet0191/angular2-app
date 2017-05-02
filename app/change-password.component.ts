import {Component} from 'angular2/core'
import {Control, ControlGroup, Validators, FormBuilder} from 'angular2/common'
import {PasswordFormValidator} from './passwordFormValidators'

@Component({
    selector: 'change-password',
    templateUrl: 'app/change-password.component.html'
})
export class ChangePasswordComponent{
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            currentPassword: ['', Validators.compose([Validators.required, PasswordFormValidator.checkMinLength]), PasswordFormValidator.checkPasswordFromServer],
            newPassword: ['', Validators.compose([Validators.required, PasswordFormValidator.checkMinLength])],
            confirmPassword: ['', Validators.compose([Validators.required, PasswordFormValidator.checkMinLength])]
        }, {validator: PasswordFormValidator.checkValueMatch});
    }
}