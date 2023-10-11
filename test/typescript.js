module.exports = {
    beforeEach: function (browser) {
        browser
            .url('https://rahulshettyacademy.com/AutomationPractice/')
            .window.maximize()
            .waitForElementVisible('body', 5000);
    },
    'First Test': function (browser) {
        browser
            .assert.titleEquals('Practice Page');
    },
    // 'Pop Up Handles':(browser)=>{
    //      browser
    //       .setValue('#name',"Juli")
    //       .click('#alertbtn')
    //       .ensure.alertIsPresent("Hello , share this practice page and share your knowledge")
    //       .alerts.accept()
    //       .ensure.not.alertIsPresent('', 500)
    //       .setValue('#name',"Monika")
    //       .click('#confirmbtn')
    //       .ensure.alertIsPresent("Hello h, Are you sure you want to confirm?")
    //       .pause(3000)
    //       .alerts.dismiss()
    //     .ensure.not.alertIsPresent('', 500, 'alert is not present');
    // },
    // 'Handling iframe': (browser) => {
    //     // Switch to the iframe by its index (0-based)
    //     browser
    //         .frame(0)
    //         // Perform actions within the iframe
    //         .waitForElementVisible("a[href='learning-path']", 5000) // Wait for elements within the iframe to be ready
    //         .isPresent("a[href='learning-path']")
    //     // Switch back to the default content
    //     browser.frame(null);
    //     // Perform actions on elements outside of the iframe
    //     browser
    //         .waitForElementVisible('body', 5000) // Wait for elements outside the iframe to be ready
    //         .assert.titleEquals('Practice Page') // Assert the title of the default page
    // },
    // 'Handling Tabs and Child Windows': (browser) => {
    //     // Click a link that opens a new tab or window
    //     browser.click('#opentab');
    //     // Switch to the newly opened tab or window
    //     browser.windowHandles((result) => {
    //       const newTab = result.value[1]; // Assuming the new tab is at index 1
    //       // Switch to the new tab or window
    //       browser.switchWindow(newTab);
    //       // Perform actions or assertions in the new tab or window
    //       browser.waitForElementVisible('body', 5000); // Wait for elements in the new tab
    //       browser.assert.title('QAClick Academy - A Testing Academy to Learn, Earn and Shine'); // Assert the title of the new tab page
    //       // Close the new tab or window (optional)
    //       browser.closeWindow();
    //       // Switch back to the original tab or window
    //       const originalTab = result.value[0]; // Assuming the original tab is at index 0
    //       browser.switchWindow(originalTab);
    //       // Perform actions or assertions in the original tab or window
    //       browser.waitForElementVisible('body', 5000); // Wait for elements in the original tab
    //       browser.assert.title('Practice Page'); // Assert the title of the original page
    //     });
    // },
    // 'JavaScript Executor Example': (browser) => {
    //     browser.executeScript('window.scrollTo(0,document.body.scrollHeight);')
    //     // Use JavaScript executor to scroll down the page
    //     browser.execute(function () {
    //         window.scrollBy(0, -1200); 
    //     });
    //     browser.pause(5000)
    //     // Use JavaScript executor to click an element by its ID
    //     browser.execute(function () {
    //         var element = document.getElementById('hide-textbox');
    //         if (element) {
    //             element.click();
    //         }
    //     });
    //  },
    afterEach: function (browser) {
        browser.end();
    }
};
