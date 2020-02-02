var samplePage = function () {
  browser.get("https://glitchitsystem.com/mathTesting/math01/ver2/");
};

samplePage.prototype = Object.create({}, {
   button: { get: function () { return element(by.css("#web-container > div > button")) }},
   field1: { get: function () { return element(by.id("num1")) }},
   field2: { get: function () { return element(by.id("num2")) }},
   answerField: { get: function () { return element(by.id("answer")) }}
});

module.exports = samplePage;
 