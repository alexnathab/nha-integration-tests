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
    noUTMurlfilled,
    requestedAtTrue
} from './components/utils'

// // TEST 1 -- no checks 
// describe(`PDF Form Test - Nothing Checked | INCLUDES UTM CODES`, function () {
//     context('desktop', function () {
//         getURL('https://dev.', '');
//         clickCTA(`[ctest=pdf_cta]`);
//         checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
//         submitForm('#form-pdf-submit');
//         checkValidity('#form-pdf', 'form-pdf');
//         requiredInfo('#form-pdf', 'form-pdf');
//         uncheckBox('#form-pdf', '#form-pdf-requestNewsletter');
//         submitForm('#form-pdf-submit');
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         pdfInfoTrue();
//         catTempFalse();
//         utmOptInFalse();
//         utmValueTrue();
//         addressDataFalse();
//         requestedAtTrue();
//     })
//     context('mobile', function () {
//         beforeEach(function () {
//             cy.viewport('iphone-6')
//             cy.wait(2000);
//         })
//         getURL('https://dev.', '');
//         clickCTA("[tripnav-section='hamburger']");
//         clickCTA("[for='mobile-pdf']");
//         checkVisibility('[ctest="pdf-cta-card-mobile"]', '#form-pdf-mobile');
//         submitForm('#form-pdf-submit-mobile');
//         checkValidity('#form-pdf-mobile', 'form-pdf-mobile');
//         requiredInfo('#form-pdf-mobile', 'form-pdf-mobile');
//         uncheckBox('#form-pdf-mobile', '#form-pdf-mobile-requestNewsletter');
//         submitForm('#form-pdf-submit-mobile');
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         pdfInfoTrue();
//         catTempFalse();
//         utmOptInFalse();
//         utmValueTrue();
//         addressDataFalse();
//         requestedAtTrue();
//     });
// });
describe(`PDF Form Test - Nothing Checked | NO UTM CODES`, function () {
    context('desktop', function () {
        getNoUTMURL('https://dev.');
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
        // noUTMurlfilled();
        // addressDataFalse();
        requestedAtTrue();
    });
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
            cy.wait(2000);
        })
        getNoUTMURL('https://dev.');
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
        // noUTMurlfilled();
        // addressDataFalse();
        requestedAtTrue();
    });
});


// // // // //TEST 2 -- enews checked only 
// describe(`PDF Form Test - eNews Checked | INCLUDES UTM CODES`, function () {
//     context('desktop', function () {
//         getURL('https://dev.', '');
//         clickCTA(`[ctest=pdf_cta]`);
//         checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
//         submitForm('#form-pdf-submit');
//         checkValidity('#form-pdf', 'form-pdf');
//         requiredInfo('#form-pdf', 'form-pdf');
//         submitForm('#form-pdf-submit');
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         pdfInfoTrue();
//         catTempFalse();
//         utmOptInTrue();
//         utmValueTrue();
//         addressDataFalse();
//         requestedAtTrue();
//     });
//     context('mobile', function () {
//         beforeEach(function () {
//             cy.viewport('iphone-6')
//             cy.wait(2000);
//         })
//         getURL('https://dev.', '');
//         clickCTA("[tripnav-section='hamburger']");
//         clickCTA("[for='mobile-pdf']");
//         checkVisibility('[ctest="pdf-cta-card-mobile"]', '#form-pdf-mobile');
//         submitForm('#form-pdf-submit-mobile');
//         checkValidity('#form-pdf-mobile', 'form-pdf-mobile');
//         requiredInfo('#form-pdf-mobile', 'form-pdf-mobile');
//         submitForm('#form-pdf-submit-mobile');
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         pdfInfoTrue();
//         catTempFalse();
//         utmOptInTrue();
//         utmValueTrue();
//         addressDataFalse();
//         requestedAtTrue();
//     });
// });
describe(`PDF Form Test - eNews Checked | NO UTM CODES`, function () {
    context('desktop', function () {
        getNoUTMURL('https://dev.');
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
        // noUTMurlfilled();
        // addressDataFalse();
        requestedAtTrue();
    });
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
            cy.wait(2000);
        })
        getNoUTMURL('https://dev.');
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
        // noUTMurlfilled();
        // addressDataFalse();
        requestedAtTrue();
    });
});

// // // // TEST 3 -- cat checked only 
// describe(`PDF Form Test - Catalog Checked | INCLUDES UTM CODES`, function () {
//     context('destkop', function () {
//         getURL('https://dev.', '');
//         clickCTA(`[ctest=pdf_cta]`);
//         checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
//         submitForm('#form-pdf-submit');
//         checkValidity('#form-pdf', 'form-pdf');
//         requiredInfo('#form-pdf', 'form-pdf');
//         uncheckBox('#form-pdf', '#form-pdf-requestNewsletter');
//         checkbox('#form-pdf', '#form-pdf-requestCatalog');
//         shipInfo('#form-pdf', 'form-pdf');
//         submitForm('#form-pdf-submit');
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         pdfInfoTrue();
//         catTemp();
//         utmOptInFalse();
//         utmValueTrue();
//         addressDataTrue();
//         requestedAtTrue();

//     })
//     context('mobile', function () {
//         beforeEach(function () {
//             cy.viewport('iphone-6')
//             cy.wait(2000);
//         })
//         getURL('https://dev.', '');
//         clickCTA("[tripnav-section='hamburger']");
//         clickCTA("[for='mobile-pdf']");
//         checkVisibility('[ctest="pdf-cta-card-mobile"]', '#form-pdf-mobile');
//         submitForm('#form-pdf-submit-mobile');
//         checkValidity('#form-pdf-mobile', 'form-pdf-mobile');
//         requiredInfo('#form-pdf-mobile', 'form-pdf-mobile');
//         uncheckBox('#form-pdf-mobile', '#form-pdf-mobile-requestNewsletter');
//         checkbox('#form-pdf-mobile', '#form-pdf-mobile-requestCatalog');
//         shipInfo('#form-pdf-mobile', 'form-pdf-mobile');
//         submitForm('#form-pdf-submit-mobile');
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         pdfInfoTrue();
//         catTemp();
//         utmOptInFalse();
//         utmValueTrue();
//         addressDataTrue();
//         requestedAtTrue();
//     });
// });
describe(`PDF Form Test - Catalog Checked | NO UTM CODES`, function () {
    context('desktop', function () {
        getNoUTMURL('https://dev.');
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
        // noUTMurlfilled();
        addressDataTrue();
        requestedAtTrue();
    });
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
            cy.wait(200);
        })
        getNoUTMURL('https://dev.');
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
        // noUTMurlfilled();
        addressDataTrue();
        requestedAtTrue();
    });
});

// // // // // TEST 4 -- both enews and catalog checked
// describe(`PDF Form Test - Catalog & eNews Checked | INCLUDES UTM CODES`, function () {
//     context('desktop', function () {
//         getURL('https://dev.', '');
//         clickCTA(`[ctest=pdf_cta]`);
//         checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
//         submitForm('#form-pdf-submit');
//         checkValidity('#form-pdf', 'form-pdf');
//         requiredInfo('#form-pdf', 'form-pdf');
//         checkbox('#form-pdf', '#form-pdf-requestCatalog');
//         shipInfo('#form-pdf', 'form-pdf');
//         submitForm('#form-pdf-submit');
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         pdfInfoTrue();
//         catTemp();
//         utmOptInTrue();
//         utmValueTrue();
//         addressDataTrue();
//         requestedAtTrue();
//     });
//     context('mobile', function () {
//         beforeEach(function () {
//             cy.viewport('iphone-6')
//             cy.wait(2000);
//         })
//         getURL('https://dev.', '');
//         clickCTA("[tripnav-section='hamburger']");
//         clickCTA("[for='mobile-pdf']");
//         checkVisibility('[ctest="pdf-cta-card-mobile"]', '#form-pdf-mobile');
//         submitForm('#form-pdf-submit-mobile');
//         checkValidity('#form-pdf-mobile', 'form-pdf-mobile');
//         requiredInfo('#form-pdf-mobile', 'form-pdf-mobile');
//         checkbox('#form-pdf-mobile', '#form-pdf-mobile-requestCatalog');
//         shipInfo('#form-pdf-mobile', 'form-pdf-mobile');
//         submitForm('#form-pdf-submit-mobile');
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         pdfInfoTrue();
//         catTemp();
//         utmOptInTrue();
//         utmValueTrue();
//         addressDataTrue();
//         requestedAtTrue();
//     });

// });
describe(`PDF Form Test - Catalog & eNews Checked | NO UTM CODES`, function () {
    context('desktop', function () {
        getNoUTMURL('https://dev.');
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
        // noUTMurlfilled();
        addressDataTrue();
        requestedAtTrue();
    });
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
            cy.wait(200);
        })
        getNoUTMURL('https://dev.');
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
        // noUTMurlfilled();
        addressDataTrue();
        requestedAtTrue();
    });
});