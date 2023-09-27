const testData = [
    { username: 'user1111', password: 'pass1111' },
    { username: 'user2222', password: 'pass2222' },
  ];
  
  // for(const data of testData)  
  
  // {
    describe('Login Test', function (){
     

      it('should log in with valid credentials', function (browser) {
        testData.forEach((testData) => {
          const { username, password } = testData;
        // console.log("testData====="+data.username + data.password)
        console.log("testData====="+username + password)

        browser
          .url('https://the-internet.herokuapp.com/')
          .window.maximize()
          .pause(3000)
          .click("ul a[href='/login']")
          .setValue('#username', username)
          .setValue('#password', password)
          .pause(2000)
          .clearValue('#username')
          .clearValue('#password')
          .pause(2000)
         .end()
      });
    });
  
  });
  // }