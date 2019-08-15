//TESTS TO SEE IF EACH TRIP CTA DOES IT'S JOB ON EACH PORTION OF THE TRIP PAGE
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
]

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

//TESTS PDF FORM SUBMISSION
//V1 --> no checkboxes checked

// describe(`Trip Internal Link CTA Test from overview page / detail button`, function () {
//     it(`Clicks details CTA, fills out the form, and submits it`, function () {
//         cy.visit(`${dev_sites[0].prefix}nathab.com/polar-bear-tours/classic-polar-bear-expedition/`);
//         cy.get(`${cta_buttons[0].id}`).click();
//         cy.contains(`${cta_buttons[0].contains}`);
//         cy.get('#cypress_pdf_lightbox_test').find('#form-pdf').should('be.visible');
//         cy.get('#form-pdf').find('#first_name').type('Test_1');
//         cy.get('#form-pdf').find('#last_name').type('Test_2');
//         cy.get('#form-pdf').find('#email').type('Test_3');
//         cy.get('#form-pdf').find('#requestNewsletter').uncheck();
//         cy.get('#form-pdf-submit').click()
//     })
// })

//V2 --> first checkbox checked

// describe(`Trip Internal Link CTA Test from overview page / detail button`, function () {
//     it(`Clicks details CTA, fills out the form, and submits it`, function () {
//         cy.visit(`${dev_sites[0].prefix}nathab.com/polar-bear-tours/classic-polar-bear-expedition/`);
//         cy.get(`${cta_buttons[0].id}`).click();
//         cy.contains(`${cta_buttons[0].contains}`);
//         cy.get('#cypress_pdf_lightbox_test').find('#form-pdf').should('be.visible');
//         cy.get('#form-pdf').find('#first_name').type('Test_1');
//         cy.get('#form-pdf').find('#last_name').type('Test_2');
//         cy.get('#form-pdf').find('#email').type('Test_3');
//         cy.get('#form-pdf').find('#requestNewsletter').check();
//         cy.get('#form-pdf-submit').click()
//     })
// })

//V3 --> second checkbox checked

// describe(`Trip Internal Link CTA Test from overview page / detail button`, function () {
//     it(`Clicks details CTA, fills out the form, and submits it`, function () {
//         cy.visit(`${dev_sites[0].prefix}nathab.com/polar-bear-tours/classic-polar-bear-expedition/`);
//         cy.get(`${cta_buttons[0].id}`).click();
//         cy.contains(`${cta_buttons[0].contains}`);
//         cy.get('#cypress_pdf_lightbox_test').find('#form-pdf').should('be.visible');
//         cy.get('#form-pdf').find('#first_name').type('Test_1');
//         cy.get('#form-pdf').find('#last_name').type('Test_2');
//         cy.get('#form-pdf').find('#email').type('Test_3');
//         cy.get('#form-pdf').find('#requestNewsletter').uncheck();
//         cy.get('#form-pdf').find('#requestCatalog').check();
//         cy.get('#form-pdf').find('#pdfRequestHomeStreet').type('Street 1');
//         cy.get('#form-pdf').find('#pdfRequestHomeStreet2').type('Street 2');
//         cy.get('#form-pdf').find('#pdfRequestHomeCity').type('City');
//         cy.get('#form-pdf').find('#pdfRequestHomeState').select('California');
//         cy.get('#form-pdf').find('#pdfRequestHomeZIP').type('ZipCode');
//         cy.get('#form-pdf').find('#pdfRequestHomeCountry').select('Algeria');
//         cy.get('#form-pdf-submit').click()
//     })
// })

//V4 --> both boxes checked

// describe(`Trip Internal Link CTA Test from overview page / detail button`, function () {
//     it(`Clicks details CTA, fills out the form, and submits it`, function () {
//         cy.visit(`${dev_sites[0].prefix}nathab.com/polar-bear-tours/classic-polar-bear-expedition/`);
//         cy.get(`${cta_buttons[0].id}`).click();
//         cy.contains(`${cta_buttons[0].contains}`);
//         cy.get('#cypress_pdf_lightbox_test').find('#form-pdf').should('be.visible');
//         cy.get('#form-pdf').find('#first_name').type('Test_1');
//         cy.get('#form-pdf').find('#last_name').type('Test_2');
//         cy.get('#form-pdf').find('#email').type('Test_3');
//         cy.get('#form-pdf').find('#requestNewsletter').check();
//         cy.get('#form-pdf').find('#requestCatalog').check();
//         cy.get('#form-pdf').find('#pdfRequestHomeStreet').type('Street 1');
//         cy.get('#form-pdf').find('#pdfRequestHomeStreet2').type('Street 2');
//         cy.get('#form-pdf').find('#pdfRequestHomeCity').type('City');
//         cy.get('#form-pdf').find('#pdfRequestHomeState').select('California');
//         cy.get('#form-pdf').find('#pdfRequestHomeZIP').type('ZipCode');
//         cy.get('#form-pdf').find('#pdfRequestHomeCountry').select('Algeria');
//         cy.get('#form-pdf-submit').click()
//     })
// })

//V5 --> content MUST me filled out
// test will fail if it isn't

// describe(`User must fill out form to submit`, function () {
//     it(`Clicks details CTA, fills out the form, and submits it`, function () {
//         cy.visit(`${dev_sites[0].prefix}nathab.com/polar-bear-tours/classic-polar-bear-expedition/`);
//         cy.get(`${cta_buttons[0].id}`).click();
//         cy.contains(`${cta_buttons[0].contains}`);
//         cy.get('#cypress_pdf_lightbox_test').find('#form-pdf').should('be.visible');
//         cy.get('#form-pdf').find('#first_name').invoke('val', '')
//         cy.get('#form-pdf').find('#last_name').invoke('val', '')
//         cy.get('#form-pdf').find('#email').invoke('val', '')
//         cy.get('#form-pdf').find('#requestCatalog').check();
//         cy.get('#form-pdf').find('#pdfRequestHomeStreet').invoke('val', '')
//         cy.get('#form-pdf').find('#pdfRequestHomeStreet2').invoke('val', '')
//         cy.get('#form-pdf').find('#pdfRequestHomeCity').invoke('val', '')
//         cy.get('#form-pdf').find('#pdfRequestHomeZIP').invoke('val', '')
//         cy.get('#form-pdf-submit').click()
//     })
// })

//V6 --> content MUST me filled out
// test will fail if it isn't

describe(`User must fill out form to submit`, function () {
    it(`Clicks details CTA and submits form without filling it out`, function () {
        cy.visit(`${dev_sites[3].prefix}nathab.com/polar-bear-tours/classic-polar-bear-expedition/`);
        cy.get(`${cta_buttons[0].id}`).click();
        cy.contains(`${cta_buttons[0].contains}`);
        cy.get('[test="pdf_lightbox"]').find('#form-pdf').should('be.visible');
        cy.get('#form-pdf').find('#requestCatalog').check();
        cy.get('#form-pdf-submit').click()
    })
})