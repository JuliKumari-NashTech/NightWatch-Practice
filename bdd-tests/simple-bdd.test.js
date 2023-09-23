describe('Ecosia', function() {
    this.tags=['search']
    // test() and specify() is also available
    this.retries(2)
    it('demo test', function(browser) {
      browser
        .url('https://www.ecosia.org/')
        .setValue('input[type=search]', 'nightwatch')
        .pause(3000)
        // .clearValue('input[type=search]')
        .click('button[type=submit]')
        .assert.textContains('.entity-titles__title', 'Nightwatch')

        .end();
    });
  });