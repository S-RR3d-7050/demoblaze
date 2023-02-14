const reporter = require('multiple-cucumber-html-reporter');

const options = {
	jsonDir: './cucumber-report',
	reportPath: 'cucumber_report/cucumber_html_report',
	metadata: {
		browser: {
			name: 'chrome',
			version: '60',
		},
		device: 'Local test machine',
		platform: {
			name: 'ubuntu',
			version: '16.04',
		},
	},
};

reporter.generate(options, true);
