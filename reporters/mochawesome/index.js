const { merge } = require('mochawesome-merge');
const htmlGenerator = require('mochawesome-report-generator');

async function generateMochaReport() {
  const jsonReport = await merge({
    files: ['out/mochawesome/*.json'],
  });

  await htmlGenerator.create(jsonReport, {
    reportDir: 'out/mochawesome/html/',
  });
}

module.exports = generateMochaReport;
