const report = require('multiple-cucumber-html-reporter');
const baseConfig = require('./reporter.config');

const generateCucumberReport = (config = {}) => {
  const mergedConfig = {
    ...baseConfig,
    ...config,
  };
  report.generate(mergedConfig);
};

module.exports = generateCucumberReport;
