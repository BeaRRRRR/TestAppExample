const userData = require('../../../fixtures/user-data');
const userFormPage = require('../../../pages/user-form-page');
const userListPage = require('../../../pages/user-list-page');

describe('update form validation',function () {
    beforeAll(function () {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
        if(userListPage.getUserList().count()==0){
            userFormPage.sendKeysNameInput(userData.user.name);
            userFormPage.sendKeysAddressInput(userData.user.address);
            userFormPage.sendKeysEmailInput(userData.user.email);
            userFormPage.getAddButton().click();
        }
        userListPage.clickEditButton();
    });
    it('should test update(edit) form validation',function () {
        userFormPage.sendKeysNameInput(userData.user.wrongName);
        expect(userFormPage.getUpdateButton().isEnabled()).toEqual(false);
        userFormPage.sendKeysNameInput(userData.user.name);
        expect(userFormPage.getUpdateButton().isEnabled()).toEqual(true);
        userFormPage.sendKeysEmailInput(userData.user.wrongEmail);
        expect(userFormPage.getUpdateButton().isEnabled()).toEqual(false);
        userFormPage.sendKeysEmailInput(userData.user.email);
        expect(userFormPage.getUpdateButton().isEnabled()).toEqual(true);
    })
});