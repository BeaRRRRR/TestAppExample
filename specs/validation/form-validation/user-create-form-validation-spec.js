const userData = require('../../../fixtures/user-data');
const userFormPage = require('../../../pages/user-form-page');


describe('create(add) form validation',function () {
    beforeAll(function () {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });
    it('should test user create form validation',function () {
        userFormPage.clearAllFields();
        userFormPage.sendKeysNameInput(userData.user.wrongName);
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
        userFormPage.sendKeysNameInput(userData.user.name);
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
        userFormPage.sendKeysAddressInput(userData.user.address);
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
        userFormPage.sendKeysNameInput(userData.user.wrongEmail);
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
        userFormPage.sendKeysEmailInput(userData.user.email);
        expect(userFormPage.getAddButton().isEnabled()).toEqual(true);
    })
});