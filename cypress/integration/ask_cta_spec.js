//TESTS FOR EACH DEV SITE + MASTER/LIVE

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

var cta_buttons = {
    button: 'Ask',
    id: '[ctest=ask_cta]',
    contains: 'Ask a Question'
}


// TEST 1 eNewsletter CHECKED

// describe(`Trip Internal Link CTA Test from overview page / detail button`, function () {
//     it(`Clicks details CTA, fills out the form, and submits it`, function () {
//         cy.visit(`${dev_sites[0].prefix}nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=testutmsrc&utm_medium=testurmmed&utm_content=testutmcont&utm_campaign=testutmcamp&utm_term=TEST`);
//         cy.get(`${cta_buttons.id}`).click();
//         cy.contains(`${cta_buttons.contains}`);
//         cy.get(`[ctest=ask_cta_lightbox]`).find('#form-ask').should('be.visible');
//         cy.get('#form-ask').find('#first_name').type('Alex-Test');
//         cy.get('#form-ask').find('#last_name').type('Test');
//         cy.get('#form-ask').find('#informationRequestPhone').type('Test');
//         cy.get('#form-ask').find('#email').type('test@solocreative.co');
//         // cy.get('#form-ask').find('#requestNewsletter').uncheck();
//         cy.get('#form-ask').find('#informationRequestDestinationsTA').clear()
//         cy.get('#form-ask').find('#informationRequestDestinationsTA').type('THIS IS A TEST');
//         cy.get('#form-ask-submit').click();
//         // function isCatalogRequested(formName, eventAction) {
//         // console.log('hello')
//         // // Need to check this based on the form used
//         // if (cy.get('#form-ask').find("[name='requestCatalog']").is(':checked')) {
//         //     // {
//         //     //     force: false
//         //     // }
//         //     console.log('this is doing something')
//         //     return false;
//         // }
//         // });
//         //pulled from ASK form
//         cy.get('[ctest=utm_form]').find('#FirstName').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#LastName').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#Email').should('not.have.value', '');
//         //OPT IN checkboxes
//         cy.get('[ctest=utm_form]').find('#optInNHA').should('be.checked');
//         cy.get('[ctest=utm_form]').find('#optInTripDrips').should('be.checked');
//         cy.get('[ctest=utm_form]').find('#optInStories').should('be.checked');
//         cy.get('[ctest=utm_form]').find('#optInWebinar').should('be.checked');
//         cy.get('[ctest=utm_form]').find('#optInSurveys').should('be.checked');
//         //pulled from UTM codes in URL for google analytics 
//         cy.get('[ctest=utm_form]').find('#utmcampaign').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#utmcontent').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#utmmedium').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#utmsource').should('not.have.value', '');
//         cy.get('[ctest=utm_form]').find('#utmterm').should('not.have.value', '');
//         //Recent Conversion Action 
//         cy.get('[ctest=utm_form]').find('#recentConversionAction').should('not.have.value', '');
//     })
// })

// TEST 2 eNewsletter NOT CHECKED

describe(`Trip Internal Link CTA Test from overview page / detail button`, function () {
    it(`Clicks details CTA, fills out the form, and submits it`, function () {
        cy.visit(`${dev_sites[0].prefix}nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=testutmsrc&utm_medium=testurmmed&utm_content=testutmcont&utm_campaign=testutmcamp&utm_term=TEST`);
        cy.get(`${cta_buttons.id}`).click();
        cy.contains(`${cta_buttons.contains}`);
        cy.get(`[ctest=ask_cta_lightbox]`).find('#form-ask').should('be.visible');
        cy.get('#form-ask').find('#first_name').type('Alex-Test');
        cy.get('#form-ask').find('#last_name').type('Test');
        cy.get('#form-ask').find('#informationRequestPhone').type('Test');
        cy.get('#form-ask').find('#email').type('test@solocreative.co');
        cy.get('#form-ask').find('#requestNewsletter').uncheck();
        cy.get('#form-ask').find('#informationRequestDestinationsTA').clear()
        cy.get('#form-ask').find('#informationRequestDestinationsTA').type('THIS IS A TEST');
        cy.get('#form-ask-submit').click();
        // function isCatalogRequested(formName, eventAction) {
        //     console.log('hello')
        //     // Need to check this based on the form used
        //     if (cy.get('#form-ask').find("[name='requestCatalog']").is(':checked')) {
        //         // {
        //         //     force: false
        //         // }
        //         console.log('this is doing something')
        //         return false;
        //     }
        // });

        //pulled from ASK form
        cy.get('[ctest=utm_form]').find('#FirstName').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#LastName').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('have.value', '');
        //OPT IN checkboxes
        cy.get('[ctest=utm_form]').find('#optInNHA').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInTripDrips').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInStories').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInWebinar').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInSurveys').should('not.be.checked');
        //pulled from UTM codes in URL for google analytics 
        cy.get('[ctest=utm_form]').find('#utmcampaign').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('have.value', '');
        //Recent Conversion Action 
        cy.get('[ctest=utm_form]').find('#recentConversionAction').should('have.value', '');
    })
})