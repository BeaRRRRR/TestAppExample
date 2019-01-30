const userFormPage = require('../pages/user-form-page');
const userListPage = require('../pages/user-list-page');
const userDeletePopoup = require('../pages/user-delete-popup');

describe('test app', function () {
    it('should get to the main page of the app', function () {
        browser.get('http://localhost:8080/TestAppExample/index');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });
    it('should write wrong input in the name input', async function () {
        userFormPage.sendKeysNameInput('na');
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual('na');
        expect(userFormPage.getNameInput().getAttribute('class')).toContain('ng-invalid-minlength');
        expect(userFormPage.getNameInput().getCssValue('background-color')).toEqual('rgba(255, 255, 0, 1)');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
    });
    it('should write blank value in the name input', async function () {
        userFormPage.sendKeysNameInput('');
        expect(userFormPage.getNameInput().getAttribute('class')).toContain('ng-invalid-required');
        expect(userFormPage.getNameInput().getCssValue('background-color')).toEqual('rgba(255, 0, 0, 1)');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
    });
    it('should write right value (which passes the validation) in the name input', function () {
        userFormPage.sendKeysNameInput('User4');
        expect(userFormPage.getNameInput().getAttribute('class')).toContain(' ng-valid ');
        expect(userFormPage.getNameInput().getCssValue('background-color')).toEqual('rgba(144, 238, 144, 1)');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
    });
    it('should value in address input', function () {
        userFormPage.sendKeysAddressInput('Address4');
        expect(userFormPage.getAddressInput().getAttribute('value')).toEqual('Address4');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
    });
    it('should write wrong input in the email input', async function () {
        userFormPage.sendKeysEmailInput('na');
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual('na');
        expect(userFormPage.getEmailInput().getAttribute('class')).toContain('ng-invalid-email');
        expect(userFormPage.getEmailInput().getCssValue('background-color')).toEqual('rgba(255, 255, 0, 1)');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
    });
    it('should write blank value in the email input', async function () {
        userFormPage.sendKeysEmailInput('');
        expect(userFormPage.getEmailInput().getAttribute('class')).toContain('ng-invalid-required');
        expect(userFormPage.getEmailInput().getCssValue('background-color')).toEqual('rgba(255, 0, 0, 1)');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
    });
    it('should write right value (which passes the validation) in the email input', function () {
        userFormPage.sendKeysEmailInput('user4@abc.com');
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual('user4@abc.com');
        expect(userFormPage.getEmailInput().getAttribute('class')).toContain(' ng-valid ');
        expect(userFormPage.getEmailInput().getCssValue('background-color')).toEqual('rgba(144, 238, 144, 1)');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(true);
    });
    it('should add user',function () {
        userFormPage.getAddButton().click();
        expect(element(by.cssContainingText('.user-name-td','User4')).isPresent()).toEqual(true);
    });
    it('should edit user',async function () {
        userListPage.clickEditButton();
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual('user4@abc.com');
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual('User4');
        expect(userFormPage.getAddressInput().getAttribute('value')).toEqual('Address4');
        userFormPage.sendKeysNameInput('Edited User4');
        userFormPage.clickUpdateButton();
        expect(element.all(by.className('user-name-td ng-binding')).get(3).getText()).toEqual('Edited User4');
    });
    it('should cancel deleting a user', function () {
        userListPage.clickRemoveButton();
        userDeletePopoup.clickCancelButton();
        expect(element(by.cssContainingText('.user-name-td','User4')).isPresent()).toEqual(true);
    });
    it('should delete a user', async function () {
        userListPage.clickRemoveButton();
        userDeletePopoup.clickOkButton();
        expect(element(by.cssContainingText('.user-name-td','User4')).isPresent()).toEqual(false);

    });
    it('should reset form', function () {
        userFormPage.sendKeysNameInput('value to be reset');
        userFormPage.clickResetFormButton();
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual('');
    });

});