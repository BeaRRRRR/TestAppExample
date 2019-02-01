const userData = require('../../fixtures/user-data');
const userFormPage = require('../../pages/user-form-page');

describe('address input validation',function () {
    beforeAll(function () {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });
    it('should value in address input', function () {
        userFormPage.sendKeysAddressInput(userData.user.address);
        expect(userFormPage.getAddressInput().getAttribute('value')).toEqual('Address4');
    });
});