// // GoogleSearchTest.ts

// import { NightwatchBrowser } from 'nightwatch';
// import { GoogleSearchPage } from '../nightwatch/page-objects/google/googlePage'; // Import the page object

// describe('Google Search Test', function () {
//   let browser: NightwatchBrowser;
//   let googleSearchPage: GoogleSearchPage;

//   before((browser, done) => {
//     browser = browser;
//     googleSearchPage = new GoogleSearchPage(browser);
//     done();
//   });

//   it('Should search for "nightwatch"', async function (browser) {
//     googleSearchPage.navigateTo(); // Navigate to the Google search page
//     googleSearchPage.setSearch('nightwatch'); // Set the search query
//     googleSearchPage.submitSearch(); // Submit the search

//     // Assertions
//     browser.assert.title('nightwatch - Google Search');
//     // Add more assertions here

//     // End the test
//     browser.end();
//   });
// });











