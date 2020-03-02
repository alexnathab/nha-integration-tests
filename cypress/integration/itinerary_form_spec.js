import {
    getURL,
    checkVisibility,
    submitForm,
    checkValidity,
    requiredInfo,
    utmPersonalInfoTrue,
    utmOptInTrue,
    utmValueTrue,
    utmValueFalse,
    utmSecondaryTrue,
    checkbox,
    shipInfo,
    catTemp,
    addressDataTrue,
    catTempFalse,
    addressDataFalse,
    getNoUTMURL,
    noUTMurlfilled,
    requestedAtTrue
} from './components/utils'

// TEST 1 -- catalog box NOT checked

describe(`Itinerary Pop Up Form Test - nothing checked | INCLUDES UTM CODES`, function () {
    console.log('this is changing');
    beforeEach(function () {
        Cypress.Cookies.preserveOnce('__utma', '__utmb', '__utmc', '__utmt', '__utmz');
    })
    getURL('https://dev.', '');
    checkVisibility('[tripnav~="wrapper"]', '#trip-nav-ul-li-2');
    it(`finds the Itinerary subnav link and clicks it`, function () {
        cy.get('[tripnav~="wrapper"]').find('#trip-nav-ul-li-2').click();
    });
    checkVisibility('[ctest=utm_itinerary]', '#form-itinerary');
    submitForm('#form-itinerary-submit');
    checkValidity('#form-itinerary', 'form-itinerary');
    requiredInfo('#form-itinerary', 'form-itinerary');
    submitForm('#form-itinerary-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    catTempFalse();
    utmOptInTrue();
    utmValueTrue();
    addressDataFalse();
    requestedAtTrue();
});

describe(`Itinerary Pop Up Form Test - nothing checked | NO UTM CODES`, function () {
    getNoUTMURL('https://dev.');
    checkVisibility('[tripnav~="wrapper"]', '#trip-nav-ul-li-2');
    it(`finds the Itinerary subnav link and clicks it`, function () {
        cy.get('[tripnav~="wrapper"]').find('#trip-nav-ul-li-2').click();
    });
    checkVisibility('[ctest=utm_itinerary]', '#form-itinerary');
    submitForm('#form-itinerary-submit');
    checkValidity('#form-itinerary', 'form-itinerary');
    requiredInfo('#form-itinerary', 'form-itinerary');
    submitForm('#form-itinerary-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    catTempFalse();
    utmOptInTrue();
    noUTMurlfilled();
    addressDataFalse();
    requestedAtTrue();
});

//TEST 2 -- catalog box CHECKED
describe(`Itinerary Pop Up Form Test - Catalog checked | INCLUDES UTM CODES`, function () {
    beforeEach(function () {
        Cypress.Cookies.preserveOnce('__utma', '__utmb', '__utmc', '__utmt', '__utmz');
    })
    getURL('https://dev.', '');
    checkVisibility('[tripnav~="wrapper"]', '#trip-nav-ul-li-2');
    it(`finds the Itinerary subnav link and clicks it`, function () {
        cy.get('[tripnav~="wrapper"]').find('#trip-nav-ul-li-2').click();
    });
    checkVisibility('[ctest=utm_itinerary]', '#form-itinerary');
    submitForm('#form-itinerary-submit');
    checkValidity('#form-itinerary', 'form-itinerary');
    requiredInfo('#form-itinerary', 'form-itinerary');
    checkbox('#form-itinerary', '#requestCatalog');
    shipInfo('#form-itinerary', 'form-itinerary');
    submitForm('#form-itinerary-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    catTemp();
    utmOptInTrue();
    utmValueTrue();
    addressDataTrue();
    requestedAtTrue();
});

describe(`Itinerary Pop Up Form Test - Catalog checked | NO UTM CODES`, function () {
    getNoUTMURL('https://dev.');
    checkVisibility('[tripnav~="wrapper"]', '#trip-nav-ul-li-2');
    it(`finds the Itinerary subnav link and clicks it`, function () {
        cy.get('[tripnav~="wrapper"]').find('#trip-nav-ul-li-2').click();
    });
    checkVisibility('[ctest=utm_itinerary]', '#form-itinerary');
    submitForm('#form-itinerary-submit');
    checkValidity('#form-itinerary', 'form-itinerary');
    requiredInfo('#form-itinerary', 'form-itinerary');
    checkbox('#form-itinerary', '#requestCatalog');
    shipInfo('#form-itinerary', 'form-itinerary');
    submitForm('#form-itinerary-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    catTemp();
    utmOptInTrue();
    noUTMurlfilled();
    addressDataTrue();
    requestedAtTrue();
});