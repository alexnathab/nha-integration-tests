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

describe(`Submits empty form but is unable to move on and is prompted with red outline on required fields`, function () {
    it(`Visits a trip specific url with UTM codes in the queries`, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`${dev_sites[0].prefix}nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
    });
    it(`Clicks Ask a Question CTA`, function () {
        cy.get(`${cta_buttons.id}`).click();
        cy.contains(`${cta_buttons.contains}`);
    });
    it(`Makes sure the form is visible`, function () {
        cy.get(`[ctest=ask_cta_lightbox]`).find('#form-ask').should('be.visible');
    });
    it(`Submits empty form`, function () {
        cy.get('#form-ask-submit').click();
    });
    it(`Prompted with red outline in required fields`, function () {
        cy.get('#form-ask').find('#first_name').should('have.class', 'js-invalid');
        cy.get('#form-ask').find('#last_name').should('have.class', 'js-invalid');
        cy.get('#form-ask').find('#email').should('have.class', 'js-invalid');
        cy.log('Please fill out required fields before submitting request');
    });
});