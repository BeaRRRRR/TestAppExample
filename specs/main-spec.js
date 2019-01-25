const userFormPage = require('../pages/user-form-page');
const userListPage = require('../pages/user-list-page');
describe('test app', function () {
    it('should get to the main page of the app', function () {
        browser.get('http://localhost:8080/TestAppExample/index');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
        let users = element.all(by.repeater('u in controller.users'));
        expect(element.all(by.repeater('u in controller.users')).count()).toEqual(3);
    });
    it('should write wrong input in the name input', async function () {
        // let nameInput =await element(by.id('uname'));
        // browser.actions().click(nameInput).sendKeys('na').perform();
        userFormPage.sendKeysNameInput('na');
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual('na');
        expect(userFormPage.getNameInput().getAttribute('class')).toContain('ng-invalid-minlength');
        expect(userFormPage.getNameInput().getCssValue('background-color')).toEqual('rgba(255, 255, 0, 1)');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
        // userFormPage.sendKeysNameInput('uname', 'na');
        // // expect(userFormPage.getInputValue('uname')).toEqual('na');
        // expect(userFormPage.getClassValue('uname')).toEqual('...');
    });
    it('should write blank value in the name input', async function () {
        userFormPage.sendKeysNameInput('');
        // browser.wait(function () {
        //     return nameInput.getAttribute('class').then((attr) => {
        //         return attr == 'username form-control input-sm ng-invalid ng-touched ng-dirty ng-valid-parse ng-invalid-required ng-valid-minlength';
        //     })
        // },10000);
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
        // let nameInput =await element(by.id('uname'));
        // browser.actions().click(nameInput).sendKeys('na').perform();
        userFormPage.sendKeysEmailInput('na');
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual('na');
        expect(userFormPage.getEmailInput().getAttribute('class')).toContain('ng-invalid-email');
        expect(userFormPage.getNameInput().getCssValue('background-color')).toEqual('rgba(255, 255, 0, 1)');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
        // userFormPage.sendKeysNameInput('uname', 'na');
        // // expect(userFormPage.getInputValue('uname')).toEqual('na');
        // expect(userFormPage.getClassValue('uname')).toEqual('...');
    });
    it('should write blank value in the email input', async function () {
        userFormPage.sendKeysEmailInput('');
        // browser.wait(function () {
        //     return nameInput.getAttribute('class').then((attr) => {
        //         return attr == 'username form-control input-sm ng-invalid ng-touched ng-dirty ng-valid-parse ng-invalid-required ng-valid-minlength';
        //     })
        // },10000);
        expect(userFormPage.getEmailInput().getAttribute('class')).toContain('ng-invalid-required');
        expect(userFormPage.getNameInput().getCssValue('background-color')).toEqual('rgba(255, 0, 0, 1)');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
    });
    it('should write right value (which passes the validation) in the email input', function () {
        userFormPage.sendKeysEmailInput('user4@abc.com');
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual('user4@abc.com');
        expect(userFormPage.getEmailInput().getAttribute('class')).toContain(' ng-valid ');
        expect(userFormPage.getNameInput().getCssValue('background-color')).toEqual('rgba(144, 238, 144, 1)');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(true);
    });
    it('should add user', function () {
        userFormPage.getAddButton().click();
        let users = element.all(by.repeater('u in controller.users'));
        expect(users.count()).toEqual(4);
    });
    it('should edit user', function () {
        userListPage.clickEditButton();
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual('user4@abc.com');
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual('User4');
        expect(userFormPage.getAddressInput().getAttribute('value')).toEqual('Address4');
        userFormPage.sendKeysNameInput('Edited User4');
        userFormPage.clickUpdateButton();
        expect(users.get(3).element(by.binding('u.userName')).getAttribute('value')).toEqual('Edited User4');
    });
    it('should cancel deleting a user', function () {
        userListPage.clickRemoveButton();
        element(by.id('cancel')).click();
        expect(users.count()).toEqual(4);
    });
    it('should delete a user', function () {
        userListPage.clickRemoveButton();
        element(by.id('ok')).click();
        expect(users.count()).toEqual(3);
        browser.sleep(5000);
    });
    it('should reset form', function () {
        userFormPage.sendKeysNameInput('value to be reset');
        userFormPage.clickResetFormButton();
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual('');
    });

});