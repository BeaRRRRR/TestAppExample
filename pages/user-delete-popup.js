var userDeletePopup = function () {
    var cancelButton = element(by.id('cancel'));
    var okButton = element(by.id('ok'));

    this.clickCancelButton = function () {
        cancelButton.click();
    };

    this.clickOkButton = function () {
        okButton.click();
    }
};

module.exports = new userDeletePopup();