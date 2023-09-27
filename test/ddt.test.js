const { assert } = require("nightwatch");

describe("DDT Testing", ()=>{
  beforeEach(()=>{
    browser.url("https://the-internet.herokuapp.com/")
    browser.window.maximize()
    browser.waitForElementVisible('body',5000)
  });
  it("upload a file",()=>{
     browser
      .click("ul a[href='/upload']")
      .waitForElementPresent('body')
      .setValue("#file-upload", "/home/knoldus/Documents/NightWatch-Practice/data.txt")
      .pause(3000)
  });
  it(" test scenario with different different data",()=>{
    
          console.log("1.DDT------------------")
  });
  
  it("Verify the title of the page", ()=>{

     browser.assert.titleEquals("The Internet")
   
  });
  it("Verify the current url contains 'internet'",()=>{
      browser.getCurrentUrl(function(result){
        console.log("current URL="+result.value)
        assert.urlContains('internet')
      })
  });
  it("Navigate forwards in the browser history",()=>{
       browser.click("ul a[href='/abtest']")
       .waitForElementVisible('body', 5000)
      .assert.textContains('.example','Test')
       .back()
       .pause(2000)
       .waitForElementVisible('body',4000)
       .assert.textContains('.heading',"the-internet")
  });
  it("take screenshot ",()=>{
       browser
       .click("ul a[href='/abtest']")
       .saveScreenshot('./screenshots/screenshot.png')
  });
 it("Submit a form",()=>{
    browser
      .click("ul a[href='/login']")
      .waitForElementVisible('body')
      .setValue('#username', 'tomsmith')
      .setValue('#password','SuperSecretPassword!')
      .submitForm('form#login')
      .assert.textContains('#flash','You logged into a secure area!')
 });
 it("accept a alert",()=>{
      browser
      .click("ul a[href='/javascript_alerts']")
      .click("button[onclick='jsConfirm()']")
      .ensure.alertIsPresent("I am a JS Confirm")
      .pause(3000)
      .alerts.accept()
      .pause(3000)
      .assert.textContains('#result',"Ok")
 });
 it.only("use xpath",()=>{
          browser
           .useXpath()
           .click("//ul//a[text()='Checkboxes']")
           .waitForElementPresent("//div[@class='example']")
           .verify.textContains("//div[@class='example']", 'Checkboxes')
           .pause(2000)
 });

  afterEach(()=>{
    browser.quit()
  })
  
});