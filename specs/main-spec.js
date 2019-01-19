const userFormPage = require('../pages/user-form-page');
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
        expect(userFormPage.getNameInput().getAttribute('class')).toEqual('username form-control input-sm ng-invalid ng-dirty ng-valid-parse ng-valid-required ng-invalid-minlength ng-touched');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
        // userFormPage.sendKeysNameInput('uname', 'na');
        // // expect(userFormPage.getInputValue('uname')).toEqual('na');
        // expect(userFormPage.getClassValue('uname')).toEqual('...');
    });
    it('should write blank value in the name input', async function () {
        userFormPage.sendKeysNameInput('');
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual('');
        // browser.wait(function () {
        //     return nameInput.getAttribute('class').then((attr) => {
        //         return attr == 'username form-control input-sm ng-invalid ng-touched ng-dirty ng-valid-parse ng-invalid-required ng-valid-minlength';
        //     })
        // },10000);
        expect(userFormPage.getNameInput().getAttribute('class')).toEqual('username form-control input-sm ng-invalid ng-touched ng-dirty ng-valid-parse ng-invalid-required ng-valid-minlength');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
    });
    it('should write right value (which passes the validation) in the name input', function () {
        userFormPage.sendKeysNameInput('User4');
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual('User4');
        expect(userFormPage.getNameInput().getAttribute('class')).toEqual('username form-control input-sm ng-dirty ng-valid-parse ng-valid-required ng-touched ng-valid ng-valid-minlength');
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
        expect(userFormPage.getEmailInput().getAttribute('class')).toEqual('email form-control input-sm ng-invalid ng-touched ng-dirty ng-invalid-email ng-valid-required');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
        // userFormPage.sendKeysNameInput('uname', 'na');
        // // expect(userFormPage.getInputValue('uname')).toEqual('na');
        // expect(userFormPage.getClassValue('uname')).toEqual('...');
    });
    it('should write blank value in the email input', async function () {
        userFormPage.sendKeysEmailInput('');
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual('');
        // browser.wait(function () {
        //     return nameInput.getAttribute('class').then((attr) => {
        //         return attr == 'username form-control input-sm ng-invalid ng-touched ng-dirty ng-valid-parse ng-invalid-required ng-valid-minlength';
        //     })
        // },10000);
        expect(userFormPage.getEmailInput().getAttribute('class')).toEqual('email form-control input-sm ng-invalid ng-touched ng-dirty ng-valid-email ng-invalid-required');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(false);
    });
    it('should write right value (which passes the validation) in the email input', function () {
        userFormPage.sendKeysEmailInput('user4@abc.com');
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual('user4@abc.com');
        expect(userFormPage.getEmailInput().getAttribute('class')).toEqual('email form-control input-sm ng-touched ng-dirty ng-valid-email ng-valid ng-valid-required');
        expect(userFormPage.getAddButton().isEnabled()).toEqual(true);
    });
    it('should add user', function () {
        userFormPage.getAddButton().click();
        let users = element.all(by.repeater('u in controller.users'));
        expect(users.count()).toEqual(4);
    });
    it('should press edit button', function () {
        let users = element.all(by.repeater('u in controller.users'));
        users.get(3).element(by.id('remove')).click();
        element(by.id('edit')).click();
        expect(userFormPage.getEmailInput().getAttribute('value')).toEqual('user4@abc.com');
        expect(userFormPage.getNameInput().getAttribute('value')).toEqual('User4');
        expect(userFormPage.getAddressInput().getAttribute('value')).toEqual('Address4');
    });
    it('should cancel deleting a user', function () {
        let users = element.all(by.repeater('u in controller.users'));
        users.get(3).element(by.id('remove')).click();
        element(by.id('cancel')).click();
        expect(users.count()).toEqual(4);
    });
    it('should delete a user', function () {
        let users = element.all(by.repeater('u in controller.users'));
        users.get(3).element(by.id('remove')).click();
        element(by.id('ok')).click();
        expect(users.count()).toEqual(3);
        browser.sleep(5000);
    });

});