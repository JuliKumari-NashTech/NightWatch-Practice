
 //commands
 const internetCommands = {
          clickAbTestingLink : function (){
               this.api.pause(2000)

               return this.waitForElementVisible('@abTestingLink', 3000)
                          .click('@abTestingLink')
                          .waitForElementNotPresent('@abTestingLink')
                    
          },
          enterUsernameandPassword: function (username1, password1) {
            return this
              .setValue('@username', username1)
              .setValue('@password', password1)
             
          }
 };

 module.exports ={
   url : 'https://the-internet.herokuapp.com/',
   commands : [
    internetCommands
   ],
   elements : {
        basicAuthLink: 'ul a[href="/basic_auth"]',
        heading : {
            selector: '.heading'
        },
        abTestingLink :{
            selector: "//ul//a[contains(text(),'A/B')]",
            locateStrategy : 'xpath'
        },
        abTestPage : '.example',
        username: '#username',
        password: '#password', 
        formAuthentication:{
          selector: "//a[normalize-space()='Form Authentication']",
          locateStrategy: 'xpath'
        }
        
   }
 };