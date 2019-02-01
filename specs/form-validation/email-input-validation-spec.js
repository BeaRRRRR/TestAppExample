const userData = require('../../fixtures/user-data');
const misc = require('../../fixtures/misc');
const userFormPage = require('../../pages/user-form-page');

describe('email input validation',function () {
    beforeAll(function () {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });
    it('should write wrong input in the email input', async function () {
        userFormPage.sendKeysEmailInput(userData.user.wrongEmail);
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual(userData.user.wrongEmail);
        expect(userFormPage.getEmailInput().getAttribute('class')).toContain('ng-invalid-email');
        expect(userFormPage.getEmailInput().getCssValue('background-color')).toEqual(misc.yellow);
    });
    it('should write blank value in the email input', async function () {
        userFormPage.sendKeysEmailInput('');
        expect(userFormPage.getEmailInput().getAttribute('class')).toContain('ng-invalid-required');
        expect(userFormPage.getEmailInput().getCssValue('background-color')).toEqual(misc.red);
    });
    it('should write right value (which passes the validation) in the email input', function () {
        userFormPage.sendKeysEmailInput(userData.user.email);
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual(userData.user.email);
        expect(userFormPage.getEmailInput().getAttribute('class')).toContain(' ng-valid ');
        expect(userFormPage.getEmailInput().getCssValue('background-color')).toEqual(misc.green);
    });
});