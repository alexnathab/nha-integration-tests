export const changeViewport = () => {
    it(`changes viewport height and width`,
        function () {
            beforeEach(function () {
                cy.viewport(1440, 980);
            });
        });
}
var urlPrefix = "dev.";
var pageUrl = "/africa/the-great-namibia-wildlife-safari/";

export const getURL = () => {
    it(`Visits a trip specific url with UTM codes in the queries`, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`${urlPrefix}nathab.com${pageUrl}`);
    });
}

export const getNoUTMURL = (prefix, itinerary) => {
    it(`Visits a trip specific url WITH NO UTM codes in the queries`, function () {
        //the following string is full of queries and thus is being used for testing
        cy.visit(`${prefix}nathab.com/africa/the-great-namibia-wildlife-safari/`);
    });
}
export const clickCTA = (text) => {
    it(`Clicks the appropriate button`, function () {
        cy.get(text).click({
            force: true
        });
    });
}

export const waitForPDF = () => {
    it(`gives time for PDF to be rendered`, function () {
        cy.wait(2000)
    });
}

export const checkVisibility = (textOne, textTwo) => {
    it(`Makes sure the form is visible`, function () {
        cy.get(textOne).find(textTwo).should('be.visible');
    });
}

export const submitForm = (text) => {
    it(`Submits form`, function () {
        cy.get(text).click();
    });
}

export const checkValidity = (formID, formTarget) => {
    it(`Prompted with red outline in required fields`, function () {
        cy.get(formID).find(`#${formTarget}-first_name`).should('have.class', 'js-invalid');
        cy.get(formID).find(`#${formTarget}-last_name`).should('have.class', 'js-invalid');
        cy.get(formID).find(`#${formTarget}-email`).should('have.class', 'js-invalid');
        cy.log('Please fill out required fields before submitting request');
    });
}
// export const checkValidity = (formID) => {
//     it(`Prompted with red outline in required fields`, function () {
//         cy.get(formID).find(`#first_name`).should('have.class', 'js-invalid');
//         cy.get(formID).find(`#last_name`).should('have.class', 'js-invalid');
//         cy.get(formID).find(`#email`).should('have.class', 'js-invalid');
//         cy.log('Please fill out required fields before submitting request');
//     });
// }

// export const requiredInfo = (formID) => {
//     it('Fills in required forms', function () {
//         cy.get(formID).find(`#first_name`).type('https://dev-Test');
//         cy.get(formID).find(`#last_name`).type('https://dev-Test');
//         cy.get(formID).find(`#email`).type('test@solocreative.com');
//     })
// };

export const requiredInfo = (formID, formTarget) => {
    it('Fills in required form fields', function () {
        cy.get(formID).find(`#${formTarget}-first_name`).type('ALEXANDRA-Test');
        cy.get(formID).find(`#${formTarget}-last_name`).type('ALEXANDRA-Test');
        cy.get(formID).find(`#${formTarget}-email`).type('test@test.com');
    })
};

export const optionalPersonalInfo = (formID, formTarget) => {
    it('Fills the optional form field info', function () {
        cy.get(formID).find(`#${formTarget}-company_name`).type('Natural Habitat Adventures');
        cy.get(formID).find(`#${formTarget}-pdfRequestHomeStreet2`).type('Suite 180');
        cy.get(formID).find(`#${formTarget}-informationRequestPhone`).type('+1 800 728 2718');
    })
}

export const requiredInfoCat = (formId) => {
    it('Fills in catalog specific required form fields', function () {

    })
}

export const utmPersonalInfoTrue = () => {
    it('Makes sure that personal information fields in UTM form ARE filled in', function () {
        cy.get('[ctest=utm_form]').find('#FirstName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#LastName').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('not.have.value', '');
    })
}

export const personalInfoOptional = () => {
    it('Makes sure that if optional fields are filled out, that the information is copied over', function () {
        cy.get('[ctest=utm_form]').find('#Company').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#addressLine2').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#Phone').should('not.have.value', '');
    })
}

export const utmPersonalInfoFalse = () => {
    it('Makes sure that personal information fields in UTM form ARE NOT filled in', function () {
        cy.get('[ctest=utm_form]').find('#FirstName').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#LastName').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('have.value', '');
    })
}

export const utmOptInTrue = () => {
    it('Makes sure that utm Opt Ins ARE checked', function () {
        cy.get('[ctest=utm_form]').find('#optInNHA').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInTripDrips').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInStories').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInWebinar').should('be.checked');
        cy.get('[ctest=utm_form]').find('#optInSurveys').should('be.checked');
    });
}

export const utmOptInFalse = () => {
    it('Makes sure that utm Opt Ins ARE NOT checked', function () {
        cy.get('[ctest=utm_form]').find('#optInNHA').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInTripDrips').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInStories').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInWebinar').should('not.be.checked');
        cy.get('[ctest=utm_form]').find('#optInSurveys').should('not.be.checked');
    });
}

export const utmValueTrue = () => {
    it('Makes sure that UTM values ARE being pulled from url queries', function () {
        cy.get('[ctest=utm_form]').find('#utmcampaign').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('not.have.value', '');
        // cy.get('[ctest=utm_form]').find('#recentConversionAction').should('not.have.value', '');
    });
}

export const requestedAtTrue = () => {
    it('Makes sure the form is capturing reference information', function () {
        cy.get('[ctest=utm_form]').find('#requestedAt').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#referringWebsite').should('not.have.value', '');
    })
}

export const recentConversionAction = () => {
    it('registers a true recent conversion action', function () {
        cy.get('[ctest=utm_form]').find('#recentConversionAction').should('not.have.value', '');
    })
}
export const recentConversionActionFalse = () => {
    it('registers an empty recent conversion action', function () {
        cy.get('[ctest=utm_form]').find('#recentConversionAction').should('have.value', '');
    })
}

export const noUTMurlfilled = () => {
    it('Makes sure that UTM values ARE being pulled from url queries', function () {
        cy.get('[ctest=utm_form]').find('#utmcampaign').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#recentConversionAction').should('not.have.value', '');
    });
}

export const UTMOnlySource = () => {
    it('Makes sure that UTM values ARE being pulled from url queries', function () {
        cy.get('[ctest=utm_form]').find('#utmcampaign').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('have.value', '');
    });
}

export const utmValueFalse = () => {
    it('Makes sure that UTM values ARE NOT being pulled from url queries', function () {
        cy.get('[ctest=utm_form]').find('#utmcampaign').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmcontent').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmmedium').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmsource').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#utmterm').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#recentConversionAction').should('have.value', '');
    });
}

export const addressDataTrue = () => {
    it('Makes sure that the address info IS filled out', function () {
        cy.get('[ctest=utm_form]').find('#Address').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#City').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#State').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#PostalCode').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#Country').should('not.have.value', '');
    })
}
export const addressDataFalse = () => {
    it('Makes sure that the address info IS NOT filled out', function () {
        cy.get('[ctest=utm_form]').find('#Address').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#City').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#State').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#PostalCode').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#Country').should('have.value', '');
    })
}

export const utmSecondaryTrue = () => {
    it('confirms secondary utm info IS populated', function () {
        cy.get('[ctest=utm_form]').find('#LeadSource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#sourceDetail').should('not.have.value', '');
    })
}

export const utmSecondaryFalse = () => {
    it('confirms secondary utm info IS NOT populated', function () {
        cy.get('[ctest=utm_form]').find('#LeadSource').should('have.value', '');
        cy.get('[ctest=utm_form]').find('#sourceDetail').should('have.value', '');
    })
}

export const catTemp = () => {
    it('makes sure temp IS filled in', function () {
        cy.get('[ctest=utm_form]').find('#temp').should('not.have.value', '');
    })
}
export const sourceDetail = () => {
    it('makes sure sourceDetail IS filled in', function () {
        cy.get('[ctest=utm_form]').find('#sourceDetail').should('not.have.value', '');
    })
}

export const leadSourceFalse = () => {
    it('makes sure that LeadSource is empty', function () {
        cy.get('[ctest=utm_form]').find('#LeadSource').should('have.value', '');
    })
}
export const catTempFalse = () => {
    it('makes sure temp IS NOT filled in', function () {
        cy.get('[ctest=utm_form]').find('#temp').should('have.value', '');
    })
}

export const pdfInfoTrue = () => {
    it('checks to make sure the recent trip PDF fields are filled', function () {
        cy.get('[ctest=utm_form]').find('#recentTripPDFRequest').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#recentTripPDFURL').should('not.have.value', '');
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

export const catalogOptionalDesktop = (formID, formTarget) => {
    it('Fills out optional fields in the catalog form', function () {
        //destination interest
        cy.get(formID).find(`#${formTarget}-destination-africa`).check();
        cy.get(formID).find(`#${formTarget}-destination-northern`).check();
        cy.get(formID).find(`#${formTarget}-destination-asia-pacific`).check();
        //travel type interests 
        // cy.get(formID).find(`#${formTarget}-interest-family`).check();
        // cy.get(formID).find(`#${formTarget}-interest-custom`).check();
        //travel experience
        cy.get(formID).find(`#${formTarget}-previously-traveled-africa`).check();
        cy.get(formID).find(`#${formTarget}-previously-traveled-galapagos`).check();
        cy.get(formID).find(`#${formTarget}-previously-traveled-europe`).check();
        //specific trip or itinerary
        cy.get(formID).find(`#${formTarget}-itinRequest`).type('East Greenland Kayaking');
        //season/year for desired travel
        cy.get(formID).find(`#${formTarget}-seasonYearInfo`).type('Summer or Fall 2021');
        //party size
        cy.get(formID).find(`#${formTarget}-party-size`).type('10');
        //per person budget
        cy.get(formID).find(`#${formTarget}-trip-budget`).select('$2500-$3500');
        //travel frequency
        cy.get(formID).find(`#${formTarget}-travel-frequency-seldom`).check();
        //reference type 
        cy.get(formID).find(`#${formTarget}-find-nathab`).select('Travel Consultant');
        //reference name 
        cy.get(formID).find(`#${formTarget}-friend-referral`).type('Carole Smith');
    })
}

export const catalogOptionalMobile = (formID, formTarget) => {
    it('Fills out optional fields in the catalog form', function () {
        //destination interest
        cy.get(formID).find(`#${formTarget}-destination-africa`).check();
        cy.get(formID).find(`#${formTarget}-destination-northern`).check();
        cy.get(formID).find(`#${formTarget}-destination-asia-pacific`).check();
        //travel type interests 
        // cy.get(formID).find(`#${formTarget}-interest-family`).check();
        // cy.get(formID).find(`#${formTarget}-interest-custom`).check();
        //travel experience
        cy.get(formID).find(`#${formTarget}-previously-traveled-africa`).check();
        cy.get(formID).find(`#${formTarget}-previously-traveled-galapagos`).check();
        cy.get(formID).find(`#${formTarget}-previously-traveled-europe`).check();
        //specific trip or itinerary
        cy.get(formID).find(`#${formTarget}-itinRequest`).type('East Greenland Kayaking');
        //season/year for desired travel
        cy.get(formID).find(`#${formTarget}-seasonYearInfo`).type('Summer or Fall 2021');
        //party size
        cy.get(formID).find(`#${formTarget}-party-size`).type('10');
        //per person budget
        cy.get(formID).find(`#${formTarget}-trip-budget`).select('$2500-$3500');
        //reference type 
        cy.get(formID).find(`#${formTarget}-find-nathab`).select('Travel Consultant');
        //reference name 
        cy.get(formID).find(`#${formTarget}-friend-referral`).type('Carole Smith');
    })
}

export const catalogOptionalMarketoDesktop = () => {
    it('Checks to make sure that optional catalog information got copied to the marketo form', function () {
        cy.get('[ctest=utm_form]').find('#interestinAfrica').should('be.checked');
        cy.get('[ctest=utm_form]').find('#interestinAlaskaNorth').should('be.checked');
        cy.get('[ctest=utm_form]').find('#interestinAsiaPacific').should('be.checked');
        // cy.get('[ctest=utm_form]').find('#interestinFamily').should('be.checked');
        // cy.get('[ctest=utm_form]').find('#interestinCustom').should('be.checked');
        // cy.get('[ctest=utm_form]').find('#mktoCheckbox_18145_6').should('be.checked');
        cy.get('[ctest=utm_form]').find('[name="temp14CatPreviousTravel"][value="Africa"]').should('be.checked');
        cy.get('[ctest=utm_form]').find('[name="temp14CatPreviousTravel"][value="Galapagos"]').should('be.checked');
        cy.get('[ctest=utm_form]').find('[name="temp14CatPreviousTravel"][value="Europe"]').should('be.checked');
        // cy.get('[ctest=utm_form]').find('#mktoCheckbox_18145_8').should('be.checked');
        cy.get('[ctest=utm_form]').find('#temp13CatTripSpecifics').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#temp12CatAvailability').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#temp10CatPartySize').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#temp11CatBudget').should('not.have.value', '');

        cy.get('[ctest=utm_form]').find('#temp15CatTravelFrequency').should('not.have.value', '');

        cy.get('[ctest=utm_form]').find('#temp8CatReferralSource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#temp9CatReferralName').should('not.have.value', '');
    })
}

export const catalogOptionalMarketoMobile = () => {
    it('Checks to make sure that optional catalog information got copied to the marketo form', function () {
        cy.get('[ctest=utm_form]').find('#interestinAfrica').should('be.checked');
        cy.get('[ctest=utm_form]').find('#interestinAlaskaNorth').should('be.checked');
        cy.get('[ctest=utm_form]').find('#interestinAsiaPacific').should('be.checked');
        // cy.get('[ctest=utm_form]').find('#interestinFamily').should('be.checked');
        // cy.get('[ctest=utm_form]').find('#interestinCustom').should('be.checked');
        // cy.get('[ctest=utm_form]').find('#mktoCheckbox_18145_0').should('be.checked');
        // cy.get('[ctest=utm_form]').find('#mktoCheckbox_18145_6').should('be.checked');
        // cy.get('[ctest=utm_form]').find('#mktoCheckbox_18145_8').should('be.checked');
        cy.get('[ctest=utm_form]').find('[name="temp14CatPreviousTravel"][value="Africa"]').should('be.checked');
        cy.get('[ctest=utm_form]').find('[name="temp14CatPreviousTravel"][value="Galapagos"]').should('be.checked');
        cy.get('[ctest=utm_form]').find('[name="temp14CatPreviousTravel"][value="Europe"]').should('be.checked');
        cy.get('[ctest=utm_form]').find('#temp13CatTripSpecifics').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#temp12CatAvailability').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#temp10CatPartySize').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#temp11CatBudget').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#temp8CatReferralSource').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#temp9CatReferralName').should('not.have.value', '');
    })
}

export const catalogJoinInfo = () => {
    it('Makes sure that the information that ties the two forms together is present', function () {
        cy.get('[ctest=utm_form]').find('#uniqueVisitorID').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#uniqueVisitorID').should('not.have.value', '');
        cy.get('[ctest=utm_form]').find('#Email').should('not.have.value', '');
    });

}
// export const shipInfo = (formID, formTarget) => {
//     it('fills in catalog shipping info', function () {
//         cy.get(formID).find(`#pdfRequestHomeStreet`).type('TEST');
//         cy.get(formID).find(`#pdfRequestHomeCity`).type('TEST');
//         cy.get(formID).find(`#pdfRequestHomeState`).select('Colorado');
//         cy.get(formID).find(`#pdfRequestHomeZIP`).type('00000');
//         cy.get(formID).find(`#pdfRequestHomeCountry`).select('Albania');
//     })
// }
// export const shipInfo = (formID, formTarget) => {
//     it('fills in catalog shipping info', function () {
//         cy.get(formID).find(`#pdfRequestHomeStreet`).type('TEST');
//         cy.get(formID).find(`#pdfRequestHomeCity`).type('TEST');
//         cy.get(formID).find(`#pdfRequestHomeState`).type('Colorado');
//         cy.get(formID).find(`#pdfRequestHomeZIP`).type('00000');
//         cy.get(formID).find(`#pdfRequestHomeCountry`).type('Albania');
//     })
// }
export const shipInfo = (formID, formTarget) => {
    it('fills in catalog shipping info', function () {
        cy.get(formID).find(`#${formTarget}-pdfRequestHomeStreet`).type('TEST');
        cy.get(formID).find(`#${formTarget}-pdfRequestHomeCity`).type('TEST');
        cy.get(formID).find(`#${formTarget}-pdfRequestHomeState`).type('Colorado');
        cy.get(formID).find(`#${formTarget}-pdfRequestHomeZIP`).type('00000');
        cy.get(formID).find(`#${formTarget}-pdfRequestHomeCountry`).type('Albania');
    })
}