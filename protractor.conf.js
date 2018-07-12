const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const e2eBaseFolder = './e2e/specs';
exports.config = {
	framework: 'jasmine',
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 600 * 1000,
		isVerbose: true
		// remove ugly protractor dot reporter
		//print: () => {}
},
	specs: [`${e2eBaseFolder}/**/*.spec.js`],
	onPrepare: function () {
		//es6 plugin
		require('@babel/register');
		  // add jasmine spec reporter
			jasmine.getEnv().addReporter(new SpecReporter({
				displayStacktrace: 'all',
				displayFailuresSummary: false
		}));

		   // screenshot reporter
			 jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
				dest: `${e2eBaseFolder}/screenshots`,
				filename: 'e2e-report.html',
				captureOnlyFailedSpecs: true,
				reportOnlyFailedSpecs: false,
				pathBuilder: (currentSpec) => {
						// TODO: can not get browser name due to
						// https://github.com/mlison/protractor-jasmine2-screenshot-reporter/issues/4
						return currentSpec.description.replace(/[ :]/g, '-');
				} }));
				// add jasmine spec reporter

				jasmine.getEnv().addReporter(new SpecReporter({
					displayStacktrace: 'all',
					displayFailuresSummary: false
			}));
		beforeEach(() => {
				// add custom matchers
			//	jasmine.addMatchers(helper.customMatchers);
		});
}, params: {
	timeout: 10000
}
};