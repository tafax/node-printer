exports.testLoadLibrary = function(test) {
  test.doesNotThrow(function(){
    printer = require("../");
  });
  test.done();
}

// TODO: add more tests
