var cta_buttons = [{
        button: 'Details',
        id: '#cypress_pdf_cta_test',
        contains: 'Download Trip Details'
    },
    {
        button: 'Ask',
        id: '#cypress_ask_cta_test',
        contains: 'Ask a Question'
    },
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

describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
    it(`Must fill out secret marketo form or it will fail`, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`alex.nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST`);
        cy.get(`${cta_buttons[0].id}`).click();
        cy.contains(`${cta_buttons[0].contains}`);
        cy.get('[test=pdf_lightbox]').find('#form-pdf').should('be.visible');
        cy.get('#form-pdf').find('#first_name').type('TEST');
        cy.get('#form-pdf').find('#last_name').type('TEST');
        cy.get('#form-pdf').find('#email').type('test@solocreative.co');
        cy.get('#form-pdf').find('#requestCatalog').check();
        cy.get('#form-pdf').find('#pdfRequestHomeStreet').type('TEST');
        cy.get('#form-pdf').find('#pdfRequestHomeCity').type('TEST');
        cy.get('#form-pdf').find('#pdfRequestHomeState').select('Colorado');
        cy.get('#form-pdf').find('#pdfRequestHomeZIP').type('TEST');
        cy.get('#form-pdf-submit').click();
        cy.wait(5000)
        cy.get('[test=utm_form]').find('#utmcampaign').should('not.have.value', '');
        cy.get('[test=utm_form]').find('#utmcontent').should('not.have.value', '');
        cy.get('[test=utm_form]').find('#utmmedium').should('not.have.value', '');
        cy.get('[test=utm_form]').find('#utmsource').should('not.have.value', '');
    })
});