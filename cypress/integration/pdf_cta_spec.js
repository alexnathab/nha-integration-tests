import {
	getURL,
	clickCTA,
	checkVisibility,
	submitForm,
	checkValidity,
	requiredInfo,
	utmPersonalInfoTrue,
	utmOptInTrue,
	utmValueTrue,
	utmSecondaryTrue,
	checkbox,
	shipInfo,
	catTemp,
	uncheckBox,
	addressDataTrue,
	utmOptInFalse,
	catTempFalse,
	pdfInfoTrue,
	addressDataFalse,
	getNoUTMURL,
	noUTMurlfilled
} from './components/utils'

// TEST 1 -- no checks
describe(`PDF Form Test - Nothing Checked | NO UTM CODES`, function () {
	context('desktop', function () {
		getNoUTMURL('http://dev1.');
		clickCTA(`[ctest=pdf_cta]`);
		checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
		submitForm('#form-pdf-submit');
		checkValidity('#form-pdf', 'form-pdf');
		requiredInfo('#form-pdf', 'form-pdf');
		uncheckBox('#form-pdf', '#requestNewsletter');
		submitForm('#form-pdf-submit');
		utmPersonalInfoTrue();
		utmSecondaryTrue();
		pdfInfoTrue();
		catTempFalse();
		utmOptInFalse();

		addressDataFalse();
	});
	context('mobile', function () {
		beforeEach(function () {
			cy.viewport('iphone-6')
			cy.wait(2000);
		})
		getNoUTMURL('http://dev1.');
		clickCTA("[tripnav-section='hamburger']");
		clickCTA("[for='mobile-pdf']");
		checkVisibility('[ctest="pdf-cta-card-mobile"]', '#form-pdf-mobile');
		submitForm('#form-pdf-submit-mobile');
		checkValidity('#form-pdf-mobile', 'form-pdf-mobile');
		requiredInfo('#form-pdf-mobile', 'form-pdf-mobile');
		uncheckBox('#form-pdf-mobile', '#requestNewsletter');
		submitForm('#form-pdf-submit-mobile');
		utmPersonalInfoTrue();
		utmSecondaryTrue();
		pdfInfoTrue();
		catTempFalse();
		utmOptInFalse();

		addressDataFalse();
	});
});


// // // //TEST 2 -- enews checked only
describe(`PDF Form Test - eNews Checked | NO UTM CODES`, function () {
	context('desktop', function () {
		getNoUTMURL('http://dev1.');
		clickCTA(`[ctest=pdf_cta]`);
		checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
		submitForm('#form-pdf-submit');
		checkValidity('#form-pdf', 'form-pdf');
		requiredInfo('#form-pdf', 'form-pdf');
		submitForm('#form-pdf-submit');
		utmPersonalInfoTrue();
		utmSecondaryTrue();
		pdfInfoTrue();
		catTempFalse();
		utmOptInTrue();

		addressDataFalse();
	});
	context('mobile', function () {
		beforeEach(function () {
			cy.viewport('iphone-6')
			cy.wait(2000);
		})
		getNoUTMURL('http://dev1.');
		clickCTA("[tripnav-section='hamburger']");
		clickCTA("[for='mobile-pdf']");
		checkVisibility('[ctest="pdf-cta-card-mobile"]', '#form-pdf-mobile');
		submitForm('#form-pdf-submit-mobile');
		checkValidity('#form-pdf-mobile', 'form-pdf-mobile');
		requiredInfo('#form-pdf-mobile', 'form-pdf-mobile');
		submitForm('#form-pdf-submit-mobile');
		utmPersonalInfoTrue();
		utmSecondaryTrue();
		pdfInfoTrue();
		catTempFalse();
		utmOptInTrue();

		addressDataFalse();
	});
});

// // // // TEST 3 -- cat checked only
describe(`PDF Form Test - Catalog Checked | NO UTM CODES`, function () {
	context('desktop', function () {
		getNoUTMURL('http://dev1.');
		clickCTA(`[ctest=pdf_cta]`);
		checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
		submitForm('#form-pdf-submit');
		checkValidity('#form-pdf', 'form-pdf');
		requiredInfo('#form-pdf', 'form-pdf');
		uncheckBox('#form-pdf', '#requestNewsletter');
		checkbox('#form-pdf', '#requestCatalog');
		shipInfo('#form-pdf', 'form-pdf');
		submitForm('#form-pdf-submit');
		utmPersonalInfoTrue();
		utmSecondaryTrue();
		pdfInfoTrue();
		catTemp();
		utmOptInFalse();

		addressDataTrue();
	});
	context('mobile', function () {
		beforeEach(function () {
			cy.viewport('iphone-6')
			cy.wait(2000);
		})
		getNoUTMURL('http://dev1.');
		clickCTA("[tripnav-section='hamburger']");
		clickCTA("[for='mobile-pdf']");
		checkVisibility('[ctest="pdf-cta-card-mobile"]', '#form-pdf-mobile');
		submitForm('#form-pdf-submit-mobile');
		checkValidity('#form-pdf-mobile', 'form-pdf-mobile');
		requiredInfo('#form-pdf-mobile', 'form-pdf-mobile');
		uncheckBox('#form-pdf-mobile', '#requestNewsletter');
		checkbox('#form-pdf-mobile', '#requestCatalog');
		shipInfo('#form-pdf-mobile', 'form-pdf-mobile');
		submitForm('#form-pdf-submit-mobile');
		utmPersonalInfoTrue();
		utmSecondaryTrue();
		pdfInfoTrue();
		catTemp();
		utmOptInFalse();

		addressDataTrue();
	});
});

// // // // TEST 4 -- both enews and catalog checked
describe(`PDF Form Test - Catalog & eNews Checked | NO UTM CODES`, function () {
	context('desktop', function () {
		getNoUTMURL('http://dev1.');
		clickCTA(`[ctest=pdf_cta]`);
		checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
		submitForm('#form-pdf-submit');
		checkValidity('#form-pdf', 'form-pdf');
		requiredInfo('#form-pdf', 'form-pdf');
		checkbox('#form-pdf', '#requestCatalog');
		shipInfo('#form-pdf', 'form-pdf');
		submitForm('#form-pdf-submit');
		utmPersonalInfoTrue();
		utmSecondaryTrue();
		pdfInfoTrue();
		catTemp();
		utmOptInTrue();

		addressDataTrue();
	});
	context('mobile', function () {
		beforeEach(function () {
			cy.viewport('iphone-6')
			cy.wait(2000);
		})
		getNoUTMURL('http://dev1.');
		clickCTA("[tripnav-section='hamburger']");
		clickCTA("[for='mobile-pdf']");
		checkVisibility('[ctest="pdf-cta-card-mobile"]', '#form-pdf-mobile');
		submitForm('#form-pdf-submit-mobile');
		checkValidity('#form-pdf-mobile', 'form-pdf-mobile');
		requiredInfo('#form-pdf-mobile', 'form-pdf-mobile');
		checkbox('#form-pdf-mobile', '#requestCatalog');
		shipInfo('#form-pdf-mobile', 'form-pdf-mobile');
		submitForm('#form-pdf-submit-mobile');
		utmPersonalInfoTrue();
		utmSecondaryTrue();
		pdfInfoTrue();
		catTemp();
		utmOptInTrue();

		addressDataTrue();
	});
});