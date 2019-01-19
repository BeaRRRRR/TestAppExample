var userFormPage= function () {
    var nameInput = element(by.id('uname'));
    var addressInput = element(by.id('address'));
    var addBUtton = element(by.id('submit'));
    var emailInput = element(by.id('email'));

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

    // this.sendKeysNameInput = function (id, keys) {
    //     var targetInput = element(by.id(id));
    //     (<HTMLInputElement>targetInput).focus().clear().sendKeys(keys)
    // };

    // this.getInputValue = function (id) {
    //     return (<HTMLInputElement>document.getElementById(id)).value
    // };

    // this.getInputValue = function (id) {
    //     return document.getElementById(id).className
    // };
};

module.exports = new userFormPage();