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
    recentTripUrlFalse
} from './components/utils'

var cta_buttons = {
    button: 'Details',
    id: '[ctest=pdf_cta]',
    contains: 'Download Trip Details'
}

// TEST 1 -- no checks 
describe(`PDF Form Test - Nothing Checked`, function () {
    getURL('https://dev.', '');
    clickCTA(`${cta_buttons.id}`);
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
describe(`PDF Form Test - eNews Checked`, function () {
    getURL('https://dev.', '');
    clickCTA(`${cta_buttons.id}`);
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
describe(`PDF Form Test - Catalog Checked`, function () {
    getURL('https://dev.', '');
    clickCTA(`${cta_buttons.id}`);
    checkVisibility('[ctest=pdf_lightbox]', '#form-pdf');
    submitForm('#form-pdf-submit');
    checkValidity('#form-pdf');
    requiredInfo('#form-pdf');
    uncheckBox('#form-pdf', '#requestNewsletter');
    checkbox('#form-pdf', '#requestCatalog');
    shipInfo('#form-pdf');
    submitForm('#form-pdf-submit');
    utmPersonalInfoFalse();
    utmSecondaryFalse();
    recentTripUrlFalse();
    catTempFalse();
    utmOptInFalse();
    utmValueFalse();
    addressDataTrue();
});

// TEST 4 -- both enews and catalog checked
describe(`PDF Form Test - Catalog & eNews Checked`, function () {
    getURL('https://dev.', '');
    clickCTA(`${cta_buttons.id}`);
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