const fs = require('fs');

const generateCucumberReport = require('./cucumber');
const generateMochaReport = require('./mochawesome');
const getTestRunData = require('./utils/getTestRunData');

async function generateReport(output, { isCucumber, isMocha } = {}) {
  const outputResultsFile = await fs.writeFile(
    'out/cypress.out.json',
    JSON.stringify(output),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );

  if (isCucumber) {
    const testMetaData = getTestRunData(output);
    generateCucumberReport(testMetaData);
  }

  if (isMocha) {
    await generateMochaReport();
  }
}

module.exports = generateReport;
