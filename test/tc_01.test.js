module.exports ={
   before: ()=>{
        console.log("before ===================")
   },
   beforeEach: ()=>{
      console.log("beforeEach ===================")
 },
    '@tags' : ['heading'],
    // globally "browser" object is present
    'TC_01 -Verify heading contains the text': () =>{
       browser
       .url('https://the-internet.herokuapp.com/')
       .fullscreenWindow()
       .pause(3000)
       .waitForElementVisible('body', 2000, "Body of the page is visible")
       .assert.textContains('.heading', 'Welcome to the-internet')
       .end();
    },
    'TC_02 - A/B Testing is present' : (browser)=>{
       browser
          .url('https://the-internet.herokuapp.com/')
          .waitForElementVisible('body')
          .click("ul a[href='/abtest']")
          .waitForElementVisible('.example',3000)
          .assert.textContains('.example', "A/B Test Control")
          .end();
          
    },
    afterEach: ()=>{
      console.log("afterEach ===================")
 },
    after: ()=>{
      console.log("after ===================")
 }
};