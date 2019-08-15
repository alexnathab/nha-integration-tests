var cta_buttons = {
    button: 'eNews',
    id: '[test=enews_utm]',
    contains: 'eNEWS'
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


describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
    it(`Must fill out secret marketo form or it will fail`, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`${dev_sites[0].prefix}nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
        cy.get(`${cta_buttons.id}`).click({
            force: true
        });
        cy.contains(`${cta_buttons.contains}`);
        cy.get('[test=utm_enews]').find('#form-enews').should('be.visible');
        cy.get('#form-enews').find('#first_name').type('TEST');
        cy.get('#form-enews').find('#last_name').type('TEST');
        cy.get('#form-enews').find('#email').type('test@solocreative.co');
        cy.get('#form-enews-submit').click();

        //Customer/attribution information that should be filled in
        cy.get('[ctest=utm_form]').find('#FirstName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#LastName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#LeadSource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#sourceDetail').should('not.have.value', '');

        //OPTIN checkboxes that should be checked
        cy.get('[ctest=utm_form]').find('#optInNHA').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInTripDrips').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInStories').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInWebinar').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInSurveys').should('be.checked');

        //UTM fields that should be filled in
        cy.get('[ctest=utm_form]').find('#utmcampaign').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('not.have.value', '');
    })
});