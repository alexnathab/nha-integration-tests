//TESTS TO SEE IF EACH TRIP CTA DOES IT'S JOB ON EACH PORTION OF THE TRIP PAGE
var cta_buttons = [{
        button: 'Book',
        id: '#cypress_book_cta_test',
    },
    {
        button: 'Details',
        id: '#cypress_pdf_cta_test',
        contains: 'Download Trip Details'
    },
    {
        button: 'Ask',
        id: '#cypress_ask_cta_test',
        contains: 'Ask a Question'
    },
    {
        button: 'Share',
        id: '#cypress_share_cta_test',
        contains: '<img src="https://platform-cdn.sharethis.com/img/facebook.svg">'
    }
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
        prefix: ""
    }
]

//TESTS EACH SUB SECTION OF TRIP PAGE

var trip_subpages = [{
        page_name: 'Overview',
        page_extension: '',
    },
    {
        page_name: 'Itinerary',
        page_extension: 'itinerary/'
    },
    {
        page_name: 'Accomodations',
        page_extension: 'accommodations/'
    },
    {
        page_name: 'Extensions',
        page_extension: 'extensions/'
    },
    {
        page_name: 'Testimonials',
        page_extension: 'comments/'
    },
    {
        page_name: 'Dates, Prices, & Info',
        page_extension: 'dates-fees/'
    },
    {
        page_name: 'Videos',
        page_extension: 'videos/'
    },
    {
        page_name: 'Know Before You Go',
        page_extension: 'tips/'
    },
]

//RUNS TEST FOR EACH CTA ON ALL SUB PAGES

for (let i = 0; i < trip_subpages.length; i++) {
    describe(`Trip Book CTA Test from ${trip_subpages[i].page_name} Page`, function () {
        it(`Gets the ${trip_subpages[i].page_name} page, clicks the book button`, function () {
            cy.visit(`${dev_sites[2].prefix}nathab.com/polar-bear-tours/classic-polar-bear-expedition/${trip_subpages[i].page_extension}`);
            cy.get(`${cta_buttons[0].id}`).click();
        })
    })

    for (let x = 1; x < 3; x++) {
        describe(`Trip Internal Link CTA Test from ${trip_subpages[i].page_name} / ${x}`, function () {
            it(`Gets the ${trip_subpages[i].page_name}, clicks the ${cta_buttons[x].button} button, opens the lightbox`, function () {
                cy.visit(`${dev_sites[2].prefix}nathab.com/polar-bear-tours/classic-polar-bear-expedition/${trip_subpages[x].page_extension}`);
                cy.get(`${cta_buttons[x].id}`).click();
                cy.contains(`${cta_buttons[x].contains}`);
            })
        })
    }

    describe(`Trip Internal Link CTA Test from ${trip_subpages[i].page_name} / 3`, function () {
        it(`Gets the ${trip_subpages[i].page_name}, clicks the ${cta_buttons[3].button} button, shows social icons`, function () {
            cy.visit(`${dev_sites[2].prefix}nathab.com/polar-bear-tours/classic-polar-bear-expedition/${trip_subpages[i].page_extension}`);
            cy.get(`${cta_buttons[3].id}`).click();
            cy.get('#cypress_social_cta_test').find('.hide').should('not.exist');
        })
    })
}

//TESTS PDF FORM SUBMISSION

describe(`Trip Internal Link CTA Test from overview page / detail button`, function () {
    it(`Clicks details CTA, fills out the form, and submits it`, function () {
        cy.visit(`${dev_sites[2].prefix}nathab.com/polar-bear-tours/classic-polar-bear-expedition/`);
        cy.get(`${cta_buttons[1].id}`).click();
        cy.contains(`${cta_buttons[1].contains}`);
        cy.get('#cypress_pdf_lightbox_test').find('#form-pdf').should('be.visible');
        cy.get('#form-pdf').find('#first_name').type('Test_1');
        cy.get('#form-pdf').find('#last_name').type('Test_2');
        cy.get('#form-pdf').find('#email').type('Test_3');
        cy.get('#form-pdf').find('#requestNewsletter').check();
        cy.get('#form-pdf').find('#requestCatalog').check();
        cy.get('#form-pdf-submit').click()
    })
})

//TESTS ASK FORM SUBMISSION 

describe(`Trip Internal Link CTA Test from overview page / detail button`, function () {
    it(`Clicks the ask CTA, fills out the form and submits it`, function () {
        cy.visit(`${dev_sites[2].prefix}nathab.com/polar-bear-tours/classic-polar-bear-expedition/`);
        cy.get(`${cta_buttons[2].id}`).click();
        cy.contains(`${cta_buttons[2].contains}`);
        cy.get('#cypress_ask_lightbox_test').find('#form-ask').should('be.visible');
        cy.get('#form-ask').find('#first_name').type('Test_1');
        cy.get('#form-ask').find('#last_name').type('Test_2');
        cy.get('#form-ask').find('#informationRequestPhone').type('000-000-000');
        cy.get('#form-ask').find('#email').type('test@test.com');
        cy.get('#form-ask').find('#requestNewsletter').check();
        cy.get('#form-ask').find('#informationRequestDestinationsTA').type('this is a test, hope it works!!');
        cy.get('#form-ask-submit').click()
    })
})