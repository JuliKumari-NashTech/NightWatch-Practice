describe( "Verify title suite ", function(){
it("Verify the title of flipkart page ",function (client){
 client.url("https://www.flipkart.com/")
  .waitForElementVisible('body')
  .assert.titleEquals("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
});
it(" Verify the Filpkart logo is present", (browser)=>{
browser.url("https://www.flipkart.com/")
.waitForElementPresent("img[title='Flipkart']")

})
});