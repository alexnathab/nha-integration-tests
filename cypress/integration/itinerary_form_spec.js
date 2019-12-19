import {
    getURL,
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
    addressDataTrue
} from './components/utils'

//TEST 1 -- catalog box NOT checked

describe(`Itinerary Pop Up Form Test - nothing checked`, function () {
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
    checkValidity('#form-itinerary');
    requiredInfo('#form-itinerary');
    submitForm('#form-itinerary-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    utmOptInTrue();
    utmValueTrue();
});

// //TEST 2 -- catalog box CHECKED
describe(`Itinerary Pop Up Form Test - Catalog checked`, function () {
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
    checkValidity('#form-itinerary');
    requiredInfo('#form-itinerary');
    checkbox('#form-itinerary', '#requestCatalog');
    shipInfo('#form-itinerary');
    submitForm('#form-itinerary-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    catTemp();
    utmOptInTrue();
    utmValueTrue();
    addressDataTrue();

});