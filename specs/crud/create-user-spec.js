const userData = require('../../fixtures/user-data');
const userFormPage = require('../../pages/user-form-page');

describe('creating user',function () {
    it('should create user', function () {
        userFormPage.sendKeysNameInput(userData.user.name);
        userFormPage.sendKeysAddressInput(userData.user.address);
        userFormPage.sendKeysEmailInput(userData.user.email);
        userFormPage.getAddButton().click();
        expect(element(by.cssContainingText('.user-name-td',userData.user.name)).isPresent()).toEqual(true);
    });
});