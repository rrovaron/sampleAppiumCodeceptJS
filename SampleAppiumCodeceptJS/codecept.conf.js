exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/rrovaron/Desktop/AppiumDemo/AppiumDemo.app',
      platform: 'iOS',
      desiredCapabilities: {
        "platformName": "iOS",
        "platformVersion": "13.2",
        "deviceName": "iPhone 11",
        "automationName": "XCUITest",
        "app": "/Users/rrovaron/Desktop/AppiumDemo/AppiumDemo.app"
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'AppiumDemo'
}