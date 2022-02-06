const getTestRunData = (output) => {
  const { browserName, browserVersion, osName, startedTestsAt, endedTestsAt } =
    output;
  const { name, description, version } = require('../../package.json');

  const cucumberReporterData = {
    customMetadata: true,
    metadata: [
      { name: 'Browser', value: browserName },
      { name: 'Browser Version', value: browserVersion },
      { name: 'OS', value: osName },
    ],
    customData: {
      title: name,
      data: [
        { label: 'Description', value: description },
        { label: 'Release', value: version },
        {
          label: 'Execution Start Time',
          value: new Date(startedTestsAt).toLocaleString(),
        },
        {
          label: 'Execution End Time',
          value: new Date(endedTestsAt).toLocaleString(),
        },
      ],
    },
  };

  return cucumberReporterData;
};

module.exports = getTestRunData;
