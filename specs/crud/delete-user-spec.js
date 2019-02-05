const userData = require('../../fixtures/user-data');
const userDeletePopup = require('../../pages/user-delete-popup');
const userListPage = require('../../pages/user-list-page');


describe('delete user',function () {
    it('should delete a user', async function () {
        userListPage.clickRemoveButton();
        userDeletePopup.clickOkButton();
        expect(element(by.cssContainingText('.user-name-td',userData.user.name)).isPresent()).toEqual(false);

    });
});