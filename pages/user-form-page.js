var userFormPage= function () {
    var nameInput = element(by.id('uname'));
    var addressInput = element(by.id('address'));
    var addBUtton = element(by.id('submit'));
    var emailInput = element(by.id('email'));
    var resetFormButton = element(by.id('reset'));
    var updateButton = element(by.id('submit'));

    this.clickUpdateButton = function () {
        updateButton.click();
    };

    this.clickResetFormButton = function () {
        resetFormButton.click();
    };

    this.getEmailInput = function () {
        return emailInput;
    };

    this.sendKeysEmailInput = function (keys) {
        emailInput.clear().sendKeys(keys)
    };

    this.getAddButton = function () {
        return addBUtton;
    };

    this.getNameInput = function () {
        return nameInput;
    };

    this.sendKeysNameInput = function (keys) {
        nameInput.clear().sendKeys(keys)
    };

    this.getAddressInput = function () {
        return addressInput;
    };

    this.sendKeysAddressInput = function (keys) {
        addressInput.clear().sendKeys(keys);
    }

};

module.exports = new userFormPage();