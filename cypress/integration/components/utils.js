export const changeViewport = () => {
    context(`Makes sure everything is visible`,
        function () {
            beforeEach(function () {
                cy.viewport(1440, 980);
            });
        });
}

export const getURL = (prefix, itinerary) => {
    it(`Visits a trip specific url with UTM codes in the queries`, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`${prefix}nathab.com/africa/the-great-namibia-wildlife-safari/${itinerary}?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
    });
}
export const clickCTA = (text) => {
    it(`Clicks the appropriate button`, function () {
        cy.get(text).click();
    });
}

export const checkVisibility = (textOne, textTwo) => {
    it(`Makes sure the form is visible`, function () {
        cy.get(textOne).find(textTwo).should('be.visible');
    });
}

export const submitForm = (text) => {
    it(`Submits empty form`, function () {
        cy.get(text).click();
    });
}

export const checkValidity = (formID) => {
    it(`Prompted with red outline in required fields`, function () {
        cy.get(formID).find('#first_name').should('have.class', 'js-invalid');
        cy.get(formID).find('#last_name').should('have.class', 'js-invalid');
        cy.get(formID).find('#email').should('have.class', 'js-invalid');
        cy.log('Please fill out required fields before submitting request');
    });
}

export const requiredInfo = (formID) => {
    it('Fills in required forms', function () {
        cy.get(formID).find('#first_name').type('Alex-Test');
        cy.get(formID).find('#last_name').type('Test');
        cy.get(formID).find('#email').type('test@solocreative.co');
    })
};

export const utmPersonalInfoTrue = () => {
    it('Makes sure that personal information fields in UTM form are not blank', function () {
        cy.get('[ctest=utm_form]').find('#FirstName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#LastName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('not.have.value', '');
    })
}
export const utmPersonalInfoFalse = () => {
    it('Makes sure that personal information fields in UTM form are not blank', function () {
        cy.get('[ctest=utm_form]').find('#FirstName').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#LastName').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('have.value', '');
    })
}

export const utmOptInTrue = () => {
    it('Makes sure that utm Opt Ins are checked', function () {
        cy.get('[ctest=utm_form]').find('#optInNHA').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInTripDrips').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInStories').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInWebinar').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInSurveys').should('be.checked');
    });
}

export const utmOptInFalse = () => {
    it('Makes sure that utm Opt Ins are checked', function () {
        cy.get('[ctest=utm_form]').find('#optInNHA').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInTripDrips').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInStories').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInWebinar').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInSurveys').should('not.be.checked');
    });
}

export const utmValueTrue = () => {
    it('Makes sure that UTM values are being pulled from url queries', function () {
        cy.get('[ctest=utm_form]').find('#utmcampaign').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#recentConversionAction').should('not.have.value', '');
    });
}
export const utmValueFalse = () => {
    it('Makes sure that UTM values are being pulled from url queries', function () {
        cy.get('[ctest=utm_form]').find('#utmcampaign').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#recentConversionAction').should('have.value', '');
    });
}

export const utmSecondaryTrue = () => {
    it('confirms secondary utm info is populated', function () {
        cy.get('[ctest=utm_form]').find('#LeadSource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#sourceDetail').should('not.have.value', '');
    })
}
export const utmSecondaryFalse = () => {
    it('confirms secondary utm info is populated', function () {
        cy.get('[ctest=utm_form]').find('#LeadSource').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#sourceDetail').should('have.value', '');
    })
}

export const recentTripUrlTrue = () => {
    it('makes sure that Recent Trip PDF Url field is filled in', function () {
        cy.get('[ctest=utm_form]').find('#recentTripPDFURL').should('not.have.value', '');
    });
}

export const recentTripUrlFalse = () => {
    it('makes sure that Recent Trip PDF Url field is empty', function () {
        cy.get('[ctest=utm_form]').find('#recentTripPDFURL').should('have.value', '');
    });
}

export const catTemp = () => {
    it('makes sure temp is filled in', function () {
        cy.get('[ctest=utm_form]').find('#temp').should('not.have.value', '');
    })
}
export const catTempFalse = () => {
    it('makes sure temp is filled in', function () {
        cy.get('[ctest=utm_form]').find('#temp').should('have.value', '');
    })
}

export const uncheckBox = (formID, checkbox) => {
    it('unchecks request box', function () {
        cy.get(formID).find(checkbox).uncheck();
    })
}

export const checkbox = (formID, checkbox) => {
    it('checks request box', function () {
        cy.get(formID).find(checkbox).check();
    })
}

export const shipInfo = (formID) => {
    it('fills in catalog shipping info', function () {
        cy.get(formID).find('#pdfRequestHomeStreet').type('TEST');
        cy.get(formID).find('#pdfRequestHomeCity').type('TEST');
        cy.get(formID).find('#pdfRequestHomeState').select('Colorado');
        cy.get(formID).find('#pdfRequestHomeZIP').type('00000');
        cy.get(formID).find('#pdfRequestHomeCountry').select('Albania');
    })
}