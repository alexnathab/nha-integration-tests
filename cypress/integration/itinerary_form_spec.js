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


//TEST 1 -- catalog box NOT checked

// describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
//     it(`Must fill out secret marketo form or it will fail`, function () {
//         //the following string is full of queries and thus is being used for testing
//         cy.visit(`${dev_sites[0].prefix}nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=testutmsrc&utm_medium=testutmmed&utm_content=testutmcontent&utm_campaign=testutmcamp&utm_term=TEST`);
//         cy.get(`[tripnav-section=text]`).click();
//         cy.contains(`Trip Details, Dates & Pricing`);
//         cy.get(`${cta_buttons.id}`).click();
//         cy.get('[ctest=utm_itinerary]').find('#form-itinerary').should('be.visible');
//         cy.get('#form-itinerary').find('#first_name').type('TEST');
//         cy.get('#form-itinerary').find('#last_name').type('TEST');
//         cy.get('#form-itinerary').find('#email').type('test@solocreative.co');
//         cy.get('#form-itinerary-submit').click();

//         cy.get('[ctest=utm_form]').find('#FirstName').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#LastName').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#Email').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#LeadSource').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#sourceDetail').should('not.have.value', '');

//         cy.get('[ctest=utm_form]').find('#optInNHA').should('be.checked');
//         cy.get('[ctest=utm_form]').find('#optInTripDrips').should('be.checked');
//         cy.get('[ctest=utm_form]').find('#optInStories').should('be.checked');
//         cy.get('[ctest=utm_form]').find('#optInWebinar').should('be.checked');
//         cy.get('[ctest=utm_form]').find('#optInSurveys').should('be.checked');

//         cy.get('[ctest=utm_form]').find('#utmcampaign').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#utmcontent').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#utmmedium').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#utmsource').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#utmterm').should('not.have.value', '');
//     })
// });

//TEST 2 -- catalog box CHECKED

describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
    it(`Must fill out secret marketo form or it will fail`, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`${dev_sites[0].prefix}nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=testutmsrc&utm_medium=testutmmed&utm_content=testutmcontent&utm_campaign=testutmcamp&utm_term=TEST`);
        cy.get(`[tripnav-section=text]`).click();
        cy.contains(`Trip Details, Dates & Pricing`);
        cy.get(`${cta_buttons.id}`).click();
        cy.get('[ctest=utm_itinerary]').find('#form-itinerary').should('be.visible');
        cy.get('#form-itinerary').find('#first_name').type('TEST');
        cy.get('#form-itinerary').find('#last_name').type('TEST');
        cy.get('#form-itinerary').find('#email').type('test@solocreative.co');
        cy.get('#form-itinerary').find('#requestCatalog').check();
        cy.get('#form-itinerary').find('#pdfRequestHomeStreet').type('TEST');
        cy.get('#form-itinerary').find('#pdfRequestHomeCity').type('TEST');
        cy.get('#form-itinerary').find('#pdfRequestHomeState').select('Colorado');
        cy.get('#form-itinerary').find('#pdfRequestHomeZIP').type('00000');
        cy.get('#form-itinerary').find('#pdfRequestHomeCountry').select('Albania');
        cy.get('#form-itinerary-submit').click();

        cy.get('[ctest=utm_form]').find('#FirstName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#LastName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#LeadSource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#sourceDetail').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#temp').should('not.have.value', '');

        cy.get('[ctest=utm_form]').find('#optInNHA').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInTripDrips').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInStories').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInWebinar').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInSurveys').should('be.checked');

        cy.get('[ctest=utm_form]').find('#utmcampaign').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('not.have.value', '');
    })
});