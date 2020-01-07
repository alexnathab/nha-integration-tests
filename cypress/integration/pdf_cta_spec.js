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
    utmPersonalInfoFalse,
    addressDataTrue,
    utmSecondaryFalse,
    utmOptInFalse,
    utmValueFalse,
    catTempFalse,
    recentTripUrlTrue,
    recentTripUrlFalse,
    utmLeadSourceTrue,
    utmSourceDetailFalse,
    pdfInfoTrue,
    addressDataFalse,
    getNoUTMURL,
    noUTMurlfilled
} from './components/utils'

// TEST 1 -- no checks 
describe(`PDF Form Test - Nothing Checked | INCLUDES UTM CODES`, function () {
    getURL('https://alex.', '');
    clickCTA(`[ctest=pdf_cta]`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    uncheckBox('#form-pdf', '#requestNewsletter');
    submitForm('#form-pdf-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    pdfInfoTrue();
    catTempFalse();
    utmOptInFalse();
    utmValueTrue();
    addressDataFalse();
});
describe(`PDF Form Test - Nothing Checked | NO UTM CODES`, function () {
    getNoUTMURL('https://alex.');
    clickCTA(`[ctest=pdf_cta]`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    uncheckBox('#form-pdf', '#requestNewsletter');
    submitForm('#form-pdf-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    pdfInfoTrue();
    catTempFalse();
    utmOptInFalse();
    noUTMurlfilled();
    addressDataFalse();
});


// //TEST 2 -- enews checked only 
describe(`PDF Form Test - eNews Checked | INCLUDES UTM CODES`, function () {
    getURL('https://alex.', '');
    clickCTA(`[ctest=pdf_cta]`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    submitForm('#form-pdf-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    pdfInfoTrue();
    catTempFalse();
    utmOptInTrue();
    utmValueTrue();
    addressDataFalse();
});
describe(`PDF Form Test - eNews Checked | NO UTM CODES`, function () {
    getNoUTMURL('https://alex.');
    clickCTA(`[ctest=pdf_cta]`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    submitForm('#form-pdf-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    pdfInfoTrue();
    catTempFalse();
    utmOptInTrue();
    noUTMurlfilled();
    addressDataFalse();
});

// // TEST 3 -- cat checked only 
describe(`PDF Form Test - Catalog Checked | INCLUDES UTM CODES`, function () {
    getURL('https://alex.', '');
    clickCTA(`[ctest=pdf_cta]`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    uncheckBox('#form-pdf', '#requestNewsletter');
    checkbox('#form-pdf', '#requestCatalog');
    shipInfo('#form-pdf');
    submitForm('#form-pdf-submit');
    utmSecondaryTrue();
    pdfInfoTrue();
    catTemp();
    utmOptInFalse();
    utmValueTrue();
    addressDataTrue();
});
describe(`PDF Form Test - Catalog Checked | NO UTM CODES`, function () {
    getNoUTMURL('https://alex.');
    clickCTA(`[ctest=pdf_cta]`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    uncheckBox('#form-pdf', '#requestNewsletter');
    checkbox('#form-pdf', '#requestCatalog');
    shipInfo('#form-pdf');
    submitForm('#form-pdf-submit');
    utmSecondaryTrue();
    pdfInfoTrue();
    catTemp();
    utmOptInFalse();
    noUTMurlfilled();
    addressDataTrue();
});

// // TEST 4 -- both enews and catalog checked
describe(`PDF Form Test - Catalog & eNews Checked | INCLUDES UTM CODES`, function () {
    getURL('https://alex.', '');
    clickCTA(`[ctest=pdf_cta]`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    checkbox('#form-pdf', '#requestCatalog');
    shipInfo('#form-pdf');
    submitForm('#form-pdf-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    pdfInfoTrue();
    catTemp();
    utmOptInTrue();
    utmValueTrue();
    addressDataTrue();
});
describe(`PDF Form Test - Catalog & eNews Checked | NO UTM CODES`, function () {
    getNoUTMURL('https://alex.');
    clickCTA(`[ctest=pdf_cta]`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    checkbox('#form-pdf', '#requestCatalog');
    shipInfo('#form-pdf');
    submitForm('#form-pdf-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    pdfInfoTrue();
    catTemp();
    utmOptInTrue();
    noUTMurlfilled();
    addressDataTrue();
});