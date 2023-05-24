import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl){
        return new Promise((resolve)=>{
            if (control.value !=='maith123')
                resolve ({ invalidOldPassword : true});
            else
                resolve(null);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmNewPassword = control.get('confirmNewPassword');

        if(newPassword?.value !== confirmNewPassword?.value)
            return { passwordsShouldMatch : true };
            
        return null;
    }
}