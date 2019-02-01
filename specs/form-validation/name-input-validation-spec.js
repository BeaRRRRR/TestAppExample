const userData = require('../../fixtures/user-data');
const misc = require('../../fixtures/misc');
const userFormPage = require('../../pages/user-form-page');


describe('name input validation',function () {
    beforeAll(function () {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });
    it('should write wrong input in the name input', async function () {
        userFormPage.sendKeysNameInput(userData.user.wrongName);
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual(userData.user.wrongName);
        expect(userFormPage.getNameInput().getAttribute('class')).toContain('ng-invalid-minlength');
        expect(userFormPage.getNameInput().getCssValue('background-color')).toEqual(misc.yellow);
    });
    it('should write blank value in the name input', async function () {
        userFormPage.sendKeysNameInput('');
        expect(userFormPage.getNameInput().getAttribute('class')).toContain('ng-invalid-required');
        expect(userFormPage.getNameInput().getCssValue('background-color')).toEqual(misc.red);
    });
    it('should write right value (which passes the validation) in the name input', function () {
        userFormPage.sendKeysNameInput(userData.user.name);
        expect(userFormPage.getNameInput().getAttribute('class')).toContain(' ng-valid ');
        expect(userFormPage.getNameInput().getCssValue('background-color')).toEqual(misc.green);
    });
});