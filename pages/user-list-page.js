var userListPage = function () {
    var editButton = element.all(by.id('edit')).last();
    var removeButton = element.all(by.id('remove')).last();
    var users = element.all(by.repeater('u in controller.users'));

    this.getUserList = function () {
        return users;
    };

    this.clickEditButton = function () {
        editButton.click();
    };

    this.clickRemoveButton = function () {
        removeButton.click();
    }
};

module.exports = new userListPage();