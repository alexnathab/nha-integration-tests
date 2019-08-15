var cta_buttons = [{
        button: 'Details',
        id: '[ctest=pdf_cta]',
        contains: 'Download Trip Details'
    },
    {
        button: 'Ask',
        id: '[ctest=ask_cta]',
        contains: 'Ask a Question'
    },
    {
        button: 'eNews',
        id: '[test=enews_utm]',
        contains: 'eNEWS'
    },
    {
        button: 'Itinerary',
        id: '#trip-nav-ul-li-2'
        // contains: 'Itinerary'
    }
]

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

// DETAILS CTA/PDF DOWNLOAD

// describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
//     it(`Must fill out secret marketo form or it will fail`, function () {
//         //the following string is full of queries and thus is being used for testing
//         cy.visit(`alex.nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST`);
//         cy.get(`${cta_buttons[0].id}`).click();
//         cy.contains(`${cta_buttons[0].contains}`);
//         cy.get('[test=pdf_lightbox]').find('#form-pdf').should('be.visible');
//         cy.get('#form-pdf').find('#first_name').type('TEST');
//         cy.get('#form-pdf').find('#last_name').type('TEST');
//         cy.get('#form-pdf').find('#email').type('test@solocreative.co');
//         cy.get('#form-pdf').find('#requestCatalog').check();
//         cy.get('#form-pdf').find('#pdfRequestHomeStreet').type('TEST');
//         cy.get('#form-pdf').find('#pdfRequestHomeCity').type('TEST');
//         cy.get('#form-pdf').find('#pdfRequestHomeState').select('Colorado');
//         cy.get('#form-pdf').find('#pdfRequestHomeZIP').type('TEST');
//         cy.get('#form-pdf-submit').click();
//         cy.wait(5000)
//         cy.get('[test=utm_form]').find('#utmcampaign').should('not.have.value', '');
//         cy.get('[test=utm_form]').find('#utmcontent').should('not.have.value', '');
//         cy.get('[test=utm_form]').find('#utmmedium').should('not.have.value', '');
//         cy.get('[test=utm_form]').find('#utmsource').should('not.have.value', '');
//     })
// });


// ASK CTA

// describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
//     it(`Must fill out secret marketo form or it will fail`, function () {
//         //the following string is full of queries and thus is being used for testing
//         cy.visit(`alex.nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST`);
//         cy.get(`${cta_buttons[1].id}`).click();
//         cy.contains(`${cta_buttons[1].contains}`);
//         cy.get('[test=pdf_lightbox]').find('#form-ask').should('be.visible');
//         cy.get('#form-ask').find('#first_name').type('TEST');
//         cy.get('#form-ask').find('#last_name').type('TEST');
//         cy.get('#form-ask').find('#informationRequestPhone').type('000-000-0000');
//         cy.get('#form-ask').find('#email').type('test@solocreative.co');
//         cy.get('#form-ask').find('#requestNewsletter').check();
//         cy.get('#form-ask').find('#informationRequestDestinationsTA').clear().type('THIS IS A TEST');
//         cy.get('#form-ask-submit').click();
//         cy.wait(5000)
//         cy.get('[test=utm_form]').find('#utmcampaign').should('not.have.value', '');
//         cy.get('[test=utm_form]').find('#utmcontent').should('not.have.value', '');
//         cy.get('[test=utm_form]').find('#utmmedium').should('not.have.value', '');
//         cy.get('[test=utm_form]').find('#utmsource').should('not.have.value', '');
//     })
// });


// ENEWS CTA

// describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
//     it(`Must fill out secret marketo form or it will fail`, function () {
//         //the following string is full of queries and thus is being used for testing
//         cy.visit(`alex.nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST`);
//         cy.get(`${cta_buttons[2].id}`).click({
//             force: true
//         });
//         cy.contains(`${cta_buttons[2].contains}`);
//         cy.get('[test=utm_enews]').find('#form-enews').should('be.visible');
//         cy.get('#form-enews').find('#first_name').type('TEST');
//         cy.get('#form-enews').find('#last_name').type('TEST');
//         cy.get('#form-enews').find('#email').type('test@solocreative.co');
//         cy.get('#form-enews-submit').click();
//         cy.wait(5000)
//         cy.get('[test=utm_form]').find('#utmcampaign').should('not.have.value', '');
//         cy.get('[test=utm_form]').find('#utmcontent').should('not.have.value', '');
//         cy.get('[test=utm_form]').find('#utmmedium').should('not.have.value', '');
//         cy.get('[test=utm_form]').find('#utmsource').should('not.have.value', '');
//     })
// });


// ITINERARY POPUP

describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
    it(`Must fill out secret marketo form or it will fail`, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`alex.nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST1&utm_medium=TEST2&utm_content=TEST3&utm_campaign=TEST4`);
        cy.get(`[tripnav-section=text]`).click();
        cy.contains(`Trip Details, Dates & Pricing`);
        cy.get(`${cta_buttons[3].id}`).click();
        cy.get('[ctest=utm_itinerary]').find('#form-itinerary').should('be.visible');
        cy.get('#form-itinerary').find('#first_name').type('TEST');
        cy.get('#form-itinerary').find('#last_name').type('TEST');
        cy.get('#form-itinerary').find('#email').type('test@solocreative.co');
        cy.get('#form-itinerary-submit').click();
        cy.wait(5000)
        cy.get('[test=utm_form]').find('#utmcampaign').should('not.have.value', '');
        cy.get('[test=utm_form]').find('#utmcontent').should('not.have.value', '');
        cy.get('[test=utm_form]').find('#utmmedium').should('not.have.value', '');
        cy.get('[test=utm_form]').find('#utmsource').should('not.have.value', '');
    })
});