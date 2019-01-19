exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare : function() {
        // browser.manage().window().setSize(1600, 1000);
        browser.manage().window().maximize();
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir : 'allure-results'
        }));
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['specs/main-spec.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 3000000,
    },
    scripts: {
        "pretest": "rm -rf allure-report",
        "test": "protractor conf.js",
        "posttest": "allure generate allure-results --clean -o allure-report  && allure open allure-report || true"
    }
};