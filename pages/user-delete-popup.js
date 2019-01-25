var userDeletePopup = function () {
    var cancelButton = element(by.id('cancel'));
    var okButton = element(by.id('ok'));

    this.clickCancelButton = function () {
        element(by.id('cancel')).click();
    };

    this.clickOkButton = function () {
        element(by.id('ok')).click();
    }
};

module.exports = new userDeletePopup();