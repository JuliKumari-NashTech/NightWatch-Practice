describe("the internet page suites ", ()=>{
    var internetPage = browser.page.theinternet.homePage()

    before(()=>{
            internetPage.navigate()
                    .maximizeWindow()
                    .pause(2000)
        }

    );
     it("Click on A/B Testing", ()=>{
            internetPage.clickAbTestingLink()
                        .pause(2000)
                        .assert.textContains('@abTestPage', 'A/B Test')
     })
     after(()=>{
        internetPage.end()
     });
});