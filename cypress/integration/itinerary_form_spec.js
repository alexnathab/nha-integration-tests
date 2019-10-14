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
    // it(`changes viewport height and width`,
    //     function () {
    //         beforeEach(function () {
    //             cy.viewport(1440, 980);
    //         });
    //     });
    beforeEach(function () {
        Cypress.Cookies.preserveOnce('__utma', '__utmb', '__utmc', '__utmt', '__utmz');
    })
    getURL(`${dev_sites[2].prefix}`, '');
    // clickCTA(`[tripnav-section=text]`);
    // // it('Makes sure that the item being clicked is the right one', function () {
    // //     cy.contains(`Trip Details, Dates & Pricing`);
    // // })
    checkVisibility('.trip-nav-ul', '#trip-nav-ul-li-2');
    // it(`Clicks the appropriate button`, function () {
    //     cy.get('.trip-nav-ul').find('#trip-nav-ul-li-2').get('#trip-nav-ul-li-2.a').click();
    // });
    it(`Makes sure the form is visible`, function () {
        cy.get('.trip-nav-ul').find('#trip-nav-ul-li-2').click();
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
// describe(`Itinerary Pop Up Form Test - Catalog checked`, function () {
//     beforeEach(function () {
//         Cypress.Cookies.preserveOnce('__utma', '__utmb', '__utmc', '__utmt', '__utmz');
//     })
//     getURL(`${dev_sites[2].prefix}`, '');
//     clickCTA(`[tripnav-section=text]`);
//     it('Makes sure that the item being clicked is the right one', function () {
//         cy.contains(`Trip Details, Dates & Pricing`);
//     })
//     clickCTA(`${cta_buttons.id}`);
//     checkVisibility('[ctest=utm_itinerary]', '#form-itinerary');
//     submitForm('#form-itinerary-submit');
//     checkValidity('#form-itinerary');
//     requiredInfo('#form-itinerary');
//     checkbox('#form-itinerary', '#requestCatalog');
//     shipInfo('#form-itinerary');
//     submitForm('#form-itinerary-submit');
//     utmPersonalInfoTrue();
//     utmSecondaryTrue();
//     catTemp();
//     utmOptInTrue();
//     utmValueTrue();

// });