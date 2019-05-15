'use strict';

var Jasmine = require('jasmine');
var JasmineConsoleReporter = require('jasmine-console-reporter');
var jasmine = new Jasmine();

var reporter = new JasmineConsoleReporter({
  colors: 1,
  cleanStack: 3,
  verbosity: 4,
  listStyle: 'indent',
  activity: false
});
jasmine.addReporter(reporter);
jasmine.showColors(true);
jasmine.loadConfigFile('./src/spec/jasmine.json');
jasmine.execute();
//# sourceMappingURL=specs.js.map