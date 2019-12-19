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
    utmSourceDetailFalse
} from './components/utils'

// TEST 1 -- no checks 
describe(`PDF Form Test - Nothing Checked | INCLUDES UTM CODES`, function () {
    getURL('https://dev.', '');
    clickCTA(`[ctest=pdf_cta]`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    uncheckBox('#form-pdf', '#requestNewsletter');
    submitForm('#form-pdf-submit');
    utmPersonalInfoFalse();
    utmSecondaryFalse();
    catTempFalse();
    utmOptInFalse();
    utmValueFalse();
});

//TEST 2 -- enews checked only 
describe(`PDF Form Test - eNews Checked | INCLUDES UTM CODES`, function () {
    getURL('https://dev.', '');
    clickCTA(`[ctest=pdf_cta]`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    submitForm('#form-pdf-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    catTempFalse();
    utmOptInTrue();
    utmValueTrue();
});

// TEST 3 -- cat checked only 
describe(`PDF Form Test - Catalog Checked | INCLUDES UTM CODES`, function () {
    getURL('https://dev.', '');
    clickCTA(`[ctest=pdf_cta]`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    uncheckBox('#form-pdf', '#requestNewsletter');
    checkbox('#form-pdf', '#requestCatalog');
    shipInfo('#form-pdf');
    submitForm('#form-pdf-submit');
    utmPersonalInfoTrue();
    utmSourceDetailFalse();
    utmLeadSourceTrue();
    recentTripUrlFalse();
    catTempFalse();
    utmOptInFalse();
    utmValueTrue();
    addressDataTrue();
});

// TEST 4 -- both enews and catalog checked
describe(`PDF Form Test - Catalog & eNews Checked | INCLUDES UTM CODES`, function () {
    getURL('https://dev.', '');
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
    recentTripUrlTrue();
    catTemp();
    utmOptInTrue();
    utmValueTrue();
    addressDataTrue();
});