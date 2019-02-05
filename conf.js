exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: function () {
        browser.manage().window().maximize();
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
        browser.get('http://localhost:8080/TestAppExample/index');
    },
    capabilities: {
        'browserName': 'chrome'
    },
    suites: {
        crud: [
            'specs/crud/create-user-spec.js',
            'specs/crud/update-user-spec.js',
            'specs/crud/cancel-deleting-user-spec.js',
            'specs/crud/delete-user-spec.js'
        ],
        validation: [
            'specs/validation/fields-validation/*.js',
            'specs/validation/form-validation/*.js'
        ]
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 3000000,
    },
};