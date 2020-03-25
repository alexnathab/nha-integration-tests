import {
    getURL,
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
    addressDataTrue,
    catTempFalse,
    addressDataFalse,
    requestedAtTrue
} from './components/utils'

// TEST 1 -- catalog box NOT checked

describe(`Itinerary Pop Up Form Test - nothing checked | NO UTM CODES`, function () {
    getURL();
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
    addressDataFalse();
    requestedAtTrue();
});

describe(`Itinerary Pop Up Form Test - Catalog checked | NO UTM CODES`, function () {
    getURL();
    checkVisibility('[tripnav~="wrapper"]', '#trip-nav-ul-li-2');
    it(`finds the Itinerary subnav link and clicks it`, function () {
        cy.get('[tripnav~="wrapper"]').find('#trip-nav-ul-li-2').click();
    });
    checkVisibility('[ctest=utm_itinerary]', '#form-itinerary');
    submitForm('#form-itinerary-submit');
    checkValidity('#form-itinerary', 'form-itinerary');
    requiredInfo('#form-itinerary', 'form-itinerary');
    checkbox('#form-itinerary', '#form-itinerary-requestCatalog');
    shipInfo('#form-itinerary', 'form-itinerary');
    submitForm('#form-itinerary-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    catTemp();
    utmOptInTrue();
    addressDataTrue();
    requestedAtTrue();
});