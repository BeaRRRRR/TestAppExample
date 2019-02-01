const userData = require('../../fixtures/user-data');
const userFormPage = require('../../pages/user-form-page');


describe('form validation',function () {
    beforeAll(function () {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });
    it('should reset form', function () {
        userFormPage.sendKeysNameInput('value to be reset');
        userFormPage.clickResetFormButton();
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual('');
    });
    it('should test form validation',function () {
        userFormPage.clearAllFields();
        userFormPage.sendKeysNameInput(userData.user.name);
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
        userFormPage.sendKeysAddressInput(userData.user.address);
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
        userFormPage.sendKeysEmailInput(userData.user.email);
        expect(userFormPage.getAddButton().isEnabled()).toEqual(true);
    })
});