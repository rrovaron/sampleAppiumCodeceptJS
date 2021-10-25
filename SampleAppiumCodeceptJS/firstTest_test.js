
Feature('PoC Appium CodeceptJS');

Scenario('Test Open App', (I) => {
    I.see('PoC Appium CodeceptJS');
});

Scenario('Test create a sum', (I) => {
    I.fillField('~txtNumber1', '1');
    I.fillField('~txtNumber2', '2');
    I.click('~btnSum');
    I.see('Result is 3', '~txtResult');
});
