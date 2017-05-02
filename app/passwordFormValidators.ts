/**
 * Created by punekala on 5/2/2017.
 */
import {Control, ControlGroup} from 'angular2/common'

export class PasswordFormValidator{
    static checkMinLength(control: Control){
        if(control.value.length <= 4)
        {
            return {checkMinLength: { minLength: 4, isInvalid: true}};
        }

        return null
    }

    static checkValueMatch(group: ControlGroup)
    {
        var control1 = group.find('newPassword');
        var control2 = group.find('confirmPassword');
        if(control1.value !== control2.value)
        {
            return {valueDontMatch: true}
        }

        return null;
    }

    static checkPasswordFromServer(control: Control){

        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if (control.value !== "1234"){
                    resolve({passwordDontMatch: true});
                }
                else
                {
                    resolve(null);
                }
            }, 1000);
        });
    }
}