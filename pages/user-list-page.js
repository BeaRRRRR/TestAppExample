var userListPage = function () {
    var editButton = element(by.id('edit'));
    var removeButton = element.all(by.repeater('u in controller.users')).get(3).element(by.id('remove')).click();

    this.clickEditButton = function () {
        editButton.click();
    };

    this.clickRemoveButton = function () {
        removeButton.click()
    }
};

module.exports = new userListPage();