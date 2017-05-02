System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordFormValidator;
    return {
        setters:[],
        execute: function() {
            PasswordFormValidator = (function () {
                function PasswordFormValidator() {
                }
                PasswordFormValidator.checkMinLength = function (control) {
                    if (control.value.length <= 4) {
                        return { checkMinLength: { minLength: 4, isInvalid: true } };
                    }
                    return null;
                };
                PasswordFormValidator.checkValueMatch = function (group) {
                    var control1 = group.find('newPassword');
                    var control2 = group.find('confirmPassword');
                    if (control1.value !== control2.value) {
                        return { valueDontMatch: true };
                    }
                    return null;
                };
                PasswordFormValidator.checkPasswordFromServer = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value !== "1234") {
                                resolve({ passwordDontMatch: true });
                            }
                            else {
                                resolve(null);
                            }
                        }, 1000);
                    });
                };
                return PasswordFormValidator;
            }());
            exports_1("PasswordFormValidator", PasswordFormValidator);
        }
    }
});
//# sourceMappingURL=passwordFormValidators.js.map