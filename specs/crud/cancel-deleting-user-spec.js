const userData = require('../../fixtures/user-data');
const userDeletePopup = require('../../pages/user-delete-popup');
const userListPage = require('../../pages/user-list-page');


describe('should cancel deleting a user',function () {
    it('should cancel deleting a user', function () {
        userListPage.clickRemoveButton();
        userDeletePopup.clickCancelButton();
        expect(element(by.cssContainingText('.user-name-td',userData.user.name)).isPresent()).toEqual(true);
    });
});