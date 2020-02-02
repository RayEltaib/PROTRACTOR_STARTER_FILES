var SamplePage = require("../pages/samplePage");

describe("Google Search Tests", function() {
  var samplePage;

  beforeEach(function() {
    browser.ignoreSynchronization = true; // This needs to be true if the site is not Angular!
    samplePage = new SamplePage();
  });

  // smoke test
  it("should search for a site", function() {
    samplePage.button.click()

    let field1
    
    samplePage.field1.getText().then(function (txt) {
      field1 = txt;
    })

    let field2
    samplePage.field2.getText().then(function (txt) {
      field2 = txt;
    })

    let answerField = samplePage.answerField.getText().then(function (txt) {
      answerField = txt
      let answer = (Number(field1) + Number(field2)).toString()
      expect(answerField).toEqual(answer);
    })


  });
});
