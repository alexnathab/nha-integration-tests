import {
    getURL,
    clickCTA,
    checkVisibility,
    submitForm,
    checkValidity
} from './components/utils'

var cta_buttons = {
    button: 'Itinerary',
    id: '#trip-nav-ul-li-2'
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

// describe(`Submits empty form but is unable to move on and is prompted with red outline on required fields`, function () {
//     // it(`Visits a trip specific url with UTM codes in the queries`, function () {
//     //     //the following string is full of queries and thus is being used for testing
//     //     cy.visit(`${dev_sites[0].prefix}nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
//     // });
//     // it(`Clicks Intinerary sub nav`, function () {
//     //     cy.get(`[tripnav-section=text]`).click();
//     //     cy.contains(`Trip Details, Dates & Pricing`);
//     //     cy.get(`${cta_buttons.id}`).click();
//     // });
//     // it(`Makes sure the form is visible`, function () {
//     //     cy.get('[ctest=utm_itinerary]').find('#form-itinerary').should('be.visible');
//     // });
//     it(`Submits empty form`, function () {
//         cy.get('#form-itinerary-submit').click();
//     });
//     it(`Prompted with red outline in required fields`, function () {
//         cy.get('#form-itinerary').find('#first_name').should('have.class', 'js-invalid');
//         cy.get('#form-itinerary').find('#last_name').should('have.class', 'js-invalid');
//         cy.get('#form-itinerary').find('#email').should('have.class', 'js-invalid');
//         cy.log('Please fill out required fields before submitting request');
//     });
// });

describe(`Submits empty form but is unable to move on and is prompted with red outline on required fields`, function () {
    getURL(`${dev_sites[0].prefix}`);
    clickCTA(`[tripnav-section=text]`);
    it('Makes sure that the item being clicked is the right one', function () {
        cy.contains(`Trip Details, Dates & Pricing`);
    })
    clickCTA(`${cta_buttons.id}`);
    checkVisibility('[ctest=utm_itinerary]', '#form-itinerary');
    submitForm('#form-itinerary-submit');
    checkValidity('#form-itinerary');
});