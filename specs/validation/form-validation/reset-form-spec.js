const userFormPage = require('../../../pages/user-form-page');

describe('reset form',function () {
    beforeAll(function () {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });
    it('should reset form', function () {
        userFormPage.sendKeysNameInput('value to be reset');
        userFormPage.clickResetFormButton();
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual('');
    });
});