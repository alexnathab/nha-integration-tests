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
} from './components/utils'

var cta_buttons = {
    button: 'Itinerary',
    id: 'a'
}

var dev_sites = [{
        branch: "Alex",
        prefix: "alex."
    },
    {
        branch: "Chris",
        prefix: "solo."
    },
    {
        branch: "Dev",
        prefix: "https://dev."
    },
    {
        branch: "Master",
        prefix: "https://www."
    }
]

//TEST 1 -- catalog box NOT checked

describe(`Itinerary Pop Up Form Test - nothing checked`, function () {
    console.log('this is changing');
    beforeEach(function () {
        Cypress.Cookies.preserveOnce('__utma', '__utmb', '__utmc', '__utmt', '__utmz');
    })
    getURL(`${dev_sites[2].prefix}`, '');
    checkVisibility('[tripnav~="wrapper"]', '#trip-nav-ul-li-2');
    it(`Clicks the appropriate button`, function () {
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
    getURL(`${dev_sites[2].prefix}`, '');
    checkVisibility('[tripnav~="wrapper"]', '#trip-nav-ul-li-2');
    it(`Clicks the appropriate button`, function () {
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

});