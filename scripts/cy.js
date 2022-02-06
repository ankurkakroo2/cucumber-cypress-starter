const cypress = require('cypress');
const generateReport = require('../reporters');

async function runTests() {
  const output = await cypress.run(); // TODO: Pass mochareporter defaults here so that report is not generated when not required

  const myArgs = process.argv;

  await generateReport(output, {
    isCucumber: myArgs.indexOf('--cucumber-report') >= 0 ? true : false,
    isMocha: myArgs.indexOf('--mocha-report') >= 0 ? true : false,
  });

  process.exit(output.totalFailed);
}

runTests();
