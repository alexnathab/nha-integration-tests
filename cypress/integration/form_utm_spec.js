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
        cy.visit(`alex.nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utmsource=TEST&utmmedium=TEST&utmcontent=TEST&utmcampaign=TEST&mkt_tok=eyJpIjoiTUdRelpEQTFZelpoTVRSbSIsInQiOiJiZFJtVnRJb1BRY1dmc0luTUltSnVsOE9qODlmR3l6dzJObUxoeFM4aUt1U2FrUmx4bEtuRGcydzl5Tlc5VHNncHRkajd5dGxITkFSUDhhOXV5S1FhQysybnJTWlpkRWtueERsSW1reTlkeDAyRGZ4elhzdTJYTmZYUnlja3ZVZyJ9`);
        cy.get(`${cta_buttons[0].id}`).click();
        cy.contains(`${cta_buttons[0].contains}`);
        cy.get('[test="pdf_lightbox"]').find('#form-pdf').should('be.visible');
        cy.get('#form-pdf').find('#first_name').type('TEST');
        cy.get('#form-pdf').find('#last_name').type('TEST');
        cy.get('#form-pdf').find('#email').type('test@solocreativeco.com');
        cy.get('#form-pdf').find('#requestCatalog').check();
        cy.get('#form-pdf').find('#pdfRequestHomeStreet').type('TEST');
        cy.get('#form-pdf').find('#pdfRequestHomeCity').type('TEST');
        cy.get('#form-pdf').find('#pdfRequestHomeState').select('Colorado');
        cy.get('#form-pdf').find('#pdfRequestHomeZIP').type('TEST');
        cy.get('#form-pdf-submit').click();
        cy.get('[test="utm_form"]').find('#utmcampaign').type('TEST');
        if (cy.url().should('include', 'utmcampaign')) {
            cy.get('[test="utm_form"]').find('#utmcampaign').should('have.value', 'TEST');
        } else if (cy.url().should('include', 'utmcontent')) {
            cy.get('[test="utm_form"]').find('#utmcontent').should('have.value', 'TEST');
        } else if (cy.url().should('include', 'utmmedium')) {
            cy.get('[test="utm_form"]').find('#utmmedium').should('have.value', 'TEST');
        } else if (cy.url().should('include', 'utmsource')) {
            cy.get('[test="utm_form"]').find('#utmsource').should('have.value', 'TEST');
        } else if (cy.url().should('include', 'utmterm')) {
            cy.get('[test="utm_form"]').find('#utmterm').should('have.value', 'TEST');
        }
        // } else if (cy.url().contains('utm_source'))
        // cy.get('#cypress_utm_testing').find('#recentConversionAction').should('have.value', 'TEST');
    })
});