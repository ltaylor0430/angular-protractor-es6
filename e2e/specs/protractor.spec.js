describe('Protractor Demo App', function () {



	it('should have a title', () => {
		browser.waitForAngularEnabled(false);

		browser.get('http://peoplestrust55.qa.ptsapp.com/login.cfm');
		browser.getAllWindowHandles().then((handles) => {
			browser.switchTo().window(handles[1]).then(() => {
				//do your stuff on the pop up window
				expect(browser.getTitle()).toEqual('PTS - Log In');



			});
		});
	});
});