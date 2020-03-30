import {
    getURL,
    clickCTA,
    checkVisibility,
    submitForm,
    checkValidity,
    requiredInfo,
    utmPersonalInfoTrue,
    utmOptInTrue,
    utmSecondaryTrue,
    checkbox,
    shipInfo,
    catTemp,
    uncheckBox,
    addressDataTrue,
    utmOptInFalse,
    catTempFalse,
    pdfInfoTrue,
    requestedAtTrue,
    waitForPDF
} from './components/utils'


describe(`PDF Form Test - Nothing Checked | NO UTM CODES`, function () {
    context('desktop', function () {
        getURL();
        clickCTA(`[ctest=pdf_cta]`);
        checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
        submitForm('#form-pdf-submit');
        checkValidity('#form-pdf', 'form-pdf');
        requiredInfo('#form-pdf', 'form-pdf');
        uncheckBox('#form-pdf', '#form-pdf-requestNewsletter');
        submitForm('#form-pdf-submit');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        pdfInfoTrue();
        catTempFalse();
        utmOptInFalse();
        requestedAtTrue();
        waitForPDF();
    });
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
        })
        getURL();
        clickCTA("[tripnav-section='hamburger']");
        clickCTA("[for='mobile-pdf']");
        checkVisibility('[ctest="pdf-cta-card-mobile"]', '#form-pdf-mobile');
        submitForm('#form-pdf-submit-mobile');
        checkValidity('#form-pdf-mobile', 'form-pdf-mobile');
        requiredInfo('#form-pdf-mobile', 'form-pdf-mobile');
        uncheckBox('#form-pdf-mobile', '#form-pdf-mobile-requestNewsletter');
        submitForm('#form-pdf-submit-mobile');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        pdfInfoTrue();
        catTempFalse();
        utmOptInFalse();
        requestedAtTrue();
        waitForPDF();
    });
});

describe(`PDF Form Test - eNews Checked | NO UTM CODES`, function () {
    context('desktop', function () {
        getURL();
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
        requestedAtTrue();
        waitForPDF();
    });
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
        })
        getURL();
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
        requestedAtTrue();
        waitForPDF();
    });
});

describe(`PDF Form Test - Catalog Checked | NO UTM CODES`, function () {
    context('desktop', function () {
        getURL();
        clickCTA(`[ctest=pdf_cta]`);
        checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
        submitForm('#form-pdf-submit');
        checkValidity('#form-pdf', 'form-pdf');
        requiredInfo('#form-pdf', 'form-pdf');
        uncheckBox('#form-pdf', '#form-pdf-requestNewsletter');
        checkbox('#form-pdf', '#form-pdf-requestCatalog');
        shipInfo('#form-pdf', 'form-pdf');
        submitForm('#form-pdf-submit');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        pdfInfoTrue();
        catTemp();
        utmOptInFalse();
        addressDataTrue();
        requestedAtTrue();
        waitForPDF();
    });
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
        })
        getURL();
        clickCTA("[tripnav-section='hamburger']");
        clickCTA("[for='mobile-pdf']");
        checkVisibility('[ctest="pdf-cta-card-mobile"]', '#form-pdf-mobile');
        submitForm('#form-pdf-submit-mobile');
        checkValidity('#form-pdf-mobile', 'form-pdf-mobile');
        requiredInfo('#form-pdf-mobile', 'form-pdf-mobile');
        uncheckBox('#form-pdf-mobile', '#form-pdf-mobile-requestNewsletter');
        checkbox('#form-pdf-mobile', '#form-pdf-mobile-requestCatalog');
        shipInfo('#form-pdf-mobile', 'form-pdf-mobile');
        submitForm('#form-pdf-submit-mobile');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        pdfInfoTrue();
        catTemp();
        utmOptInFalse();
        addressDataTrue();
        requestedAtTrue();
        waitForPDF();
    });
});

describe(`PDF Form Test - Catalog & eNews Checked | NO UTM CODES`, function () {
    context('desktop', function () {
        getURL();
        clickCTA(`[ctest=pdf_cta]`);
        checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
        submitForm('#form-pdf-submit');
        checkValidity('#form-pdf', 'form-pdf');
        requiredInfo('#form-pdf', 'form-pdf');
        checkbox('#form-pdf', '#form-pdf-requestCatalog');
        shipInfo('#form-pdf', 'form-pdf');
        submitForm('#form-pdf-submit');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        pdfInfoTrue();
        catTemp();
        utmOptInTrue();
        addressDataTrue();
        requestedAtTrue();
        waitForPDF();
    });
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
        })
        getURL();
        clickCTA("[tripnav-section='hamburger']");
        clickCTA("[for='mobile-pdf']");
        checkVisibility('[ctest="pdf-cta-card-mobile"]', '#form-pdf-mobile');
        submitForm('#form-pdf-submit-mobile');
        checkValidity('#form-pdf-mobile', 'form-pdf-mobile');
        requiredInfo('#form-pdf-mobile', 'form-pdf-mobile');
        checkbox('#form-pdf-mobile', '#form-pdf-mobile-requestCatalog');
        shipInfo('#form-pdf-mobile', 'form-pdf-mobile');
        submitForm('#form-pdf-submit-mobile');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        pdfInfoTrue();
        catTemp();
        utmOptInTrue();
        addressDataTrue();
        requestedAtTrue();
        waitForPDF();
    });
});