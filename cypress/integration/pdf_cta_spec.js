var cta_buttons = {
    button: 'Details',
    id: '[ctest=pdf_cta]',
    contains: 'Download Trip Details'
}

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

// TEST 1 -- no checks 
describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
    it(`Must fill out secret marketo form or it will fail`, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`${dev_sites[0].prefix}nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
        cy.get(`${cta_buttons.id}`).click();
        cy.contains(`${cta_buttons.contains}`);
        cy.get('[ctest=pdf_lightbox]').find('#form-pdf').should('be.visible');
        cy.get('#form-pdf').find('#first_name').type('TEST');
        cy.get('#form-pdf').find('#last_name').type('TEST');
        cy.get('#form-pdf').find('#email').type('test@solocreative.co');
        cy.get('#form-pdf').find('#requestNewsletter').uncheck();
        cy.get('#form-pdf-submit').click();

        cy.get('[ctest=utm_form]').find('#FirstName').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#LastName').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#LeadSource').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#sourceDetail').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#recentTripPDFURL').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#temp').should('have.value', '');

        cy.get('[ctest=utm_form]').find('#optInNHA').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInTripDrips').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInStories').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInWebinar').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInSurveys').should('not.be.checked');

        cy.get('[ctest=utm_form]').find('#utmcampaign').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('have.value', '');

        // Recent Conversion Action 
        cy.get('[ctest=utm_form]').find('#recentConversionAction').should('have.value', '');
    });
});

//TEST 2 -- enews checked only 
describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
    it(`Must fill out secret marketo form or it will fail`, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`${dev_sites[0].prefix}nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
        cy.get(`${cta_buttons.id}`).click();
        cy.contains(`${cta_buttons.contains}`);
        cy.get('[ctest=pdf_lightbox]').find('#form-pdf').should('be.visible');
        cy.get('#form-pdf').find('#first_name').type('TEST');
        cy.get('#form-pdf').find('#last_name').type('TEST');
        cy.get('#form-pdf').find('#email').type('test@solocreative.co');
        cy.get('#form-pdf-submit').click();

        cy.get('[ctest=utm_form]').find('#FirstName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#LastName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#LeadSource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#sourceDetail').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#recentTripPDFURL').should('not.have.value', '');

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

        // Recent Conversion Action 
        cy.get('[ctest=utm_form]').find('#recentConversionAction').should('not.have.value', '');
    });
});

// TEST 3 -- cat checked only 
describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
    it(`Must fill out secret marketo form or it will fail`, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`${dev_sites[0].prefix}nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
        cy.get(`${cta_buttons.id}`).click();
        cy.contains(`${cta_buttons.contains}`);
        cy.get('[ctest=pdf_lightbox]').find('#form-pdf').should('be.visible');
        cy.get('#form-pdf').find('#first_name').type('TEST');
        cy.get('#form-pdf').find('#last_name').type('TEST');
        cy.get('#form-pdf').find('#email').type('test@solocreative.co');
        cy.get('#form-pdf').find('#requestNewsletter').uncheck();
        cy.get('#form-pdf').find('#requestCatalog').check();
        cy.get('#form-pdf').find('#pdfRequestHomeStreet').type('TEST');
        cy.get('#form-pdf').find('#pdfRequestHomeCity').type('TEST');
        cy.get('#form-pdf').find('#pdfRequestHomeState').select('Colorado');
        cy.get('#form-pdf').find('#pdfRequestHomeZIP').type('TEST');
        cy.get('#form-pdf').find('#pdfRequestHomeCountry').select('Albania');
        cy.get('#form-pdf-submit').click();
        //     function isCatalogRequested(formName, eventAction) {
        //         // Need to check this based on the form used
        //         if ($(formName).find("[name='requestCatalog']").is(':checked')) {
        //             {
        //                 force: false
        //             }
        //         }
        //     }
        // );


        cy.get('[ctest=utm_form]').find('#FirstName').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#LastName').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#LeadSource').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#sourceDetail').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#recentTripPDFURL').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#temp').should('have.value', '');

        cy.get('[ctest=utm_form]').find('#optInNHA').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInTripDrips').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInStories').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInWebinar').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInSurveys').should('not.be.checked');

        cy.get('[ctest=utm_form]').find('#utmcampaign').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('have.value', '');
        // Recent Conversion Action 
        cy.get('[ctest=utm_form]').find('#recentConversionAction').should('have.value', '');
    });
});

// TEST 4 -- both enews and catalog checked
describe(`Secret marketo form UTM inputs get filled out based on queries`, function () {
    it(`Vists the correct url and clicks on the 'Get Trip Details' CTA `, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`${dev_sites[0].prefix}nathab.com/africa/the-great-namibia-wildlife-safari/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
        cy.get(`${cta_buttons.id}`).click();
        cy.contains(`${cta_buttons.contains}`);
    });
    it(`Makes sure that the form is visible, and thus can be manipulated`, function () {
        cy.get('[ctest=pdf_lightbox]').find('#form-pdf').should('be.visible');
    });
    it(`Fills in Name/contact information`, function () {
        cy.get('#form-pdf').find('#first_name').type('NEW TEST 12:12');
        cy.get('#form-pdf').find('#last_name').type('TEST');
        cy.get('#form-pdf').find('#email').type('alex@gmail.com');
    });
    it(`Checks the Request Catalog checkbox`, function () {
        cy.get('#form-pdf').find('#requestCatalog').check();
    });
    it(`Fills out shipping information`, function () {
        cy.get('#form-pdf').find('#pdfRequestHomeStreet').type('TST');
        cy.get('#form-pdf').find('#pdfRequestHomeCity').type('TEST');
        cy.get('#form-pdf').find('#pdfRequestHomeState').select('Colorado');
        cy.get('#form-pdf').find('#pdfRequestHomeZIP').type('TEST');
        cy.get('#form-pdf').find('#pdfRequestHomeCountry').select('Albania');
    });
    it(`Submits marketo form but blocks Tour Tools form`, function () {
        cy.get('#form-pdf-submit').click();

        // function isCatalogRequested(formName, eventAction) {
        //     console.log('hello')
        //     // Need to check this based on the form used
        //     if ($(formName).find("[name='requestCatalog']").is(':checked')) {
        //         // {
        //         //     force: false
        //         // }
        //         console.log('this is doing something')
        //         return
        //     }
        // });
    });
    it(`Secret form should have FirstName, LastName, and Email input value`, function () {
        cy.get('[ctest=utm_form]').find('#FirstName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#LastName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('not.have.value', '');
    });
    it(`Secret form should have LeadSource input value`, function () {
        cy.get('[ctest=utm_form]').find('#LeadSource').should('not.have.value', '');
    });
    it(`Secret form should have SourceDetail input value`, function () {
        cy.get('[ctest=utm_form]').find('#sourceDetail').should('not.have.value', '');
    });
    it(`Secret form should have RecentTripPDFUrl input value`, function () {
        cy.get('[ctest=utm_form]').find('#recentTripPDFURL').should('not.have.value', '');
    });
    it(`Secret form should have Temp input value`, function () {
        cy.get('[ctest=utm_form]').find('#temp').should('not.have.value', '');
    });
    it(`Secret form OptIns should be checked`, function () {
        cy.get('[ctest=utm_form]').find('#optInNHA').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInTripDrips').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInStories').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInWebinar').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInSurveys').should('be.checked');
    });
    it(`UTMs should have value`, function () {
        cy.get('[ctest=utm_form]').find('#utmcampaign').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('not.have.value', '');
    });
    it(`Recent Conversion Action Field should have a value`, function () {
        //Recent Conversion Action 
        cy.get('[ctest=utm_form]').find('#recentConversionAction').should('not.have.value', '');
    });
});