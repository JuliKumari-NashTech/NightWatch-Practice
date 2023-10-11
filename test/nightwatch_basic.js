module.exports ={
    "Verify the title of the page for flipkart": function(browser){
      browser.url("https://www.flipkart.com/")
             .waitForElementVisible("body", 3000 ,"Body of the page is visible")
             .assert.titleEquals("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!","Assert Title of Flipkart page")
    },

    "Click on login": (browser)=>{
     browser.url("https://www.formsite.com/")
     .waitForElementVisible("body")
     .element.findByText(" Log in ").click()
     
    }
};