const userData = require('../../fixtures/user-data');
const userFormPage = require('../../pages/user-form-page');
const userListPage = require('../../pages/user-list-page');

describe('update user',function () {
    it('should update(edit) user',async function () {
        userListPage.clickEditButton();
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual(userData.user.email);
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual(userData.user.name);
        expect(userFormPage.getAddressInput().getAttribute('value')).toEqual(userData.user.address);
        userFormPage.sendKeysNameInput(userData.user.editedName);
        userFormPage.clickUpdateButton();
        expect(element.all(by.className('user-name-td ng-binding')).get(3).getText()).toEqual(userData.user.editedName);
    });
});