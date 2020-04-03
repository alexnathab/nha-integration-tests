import {
    getURL,
    clickCTA,
    checkVisibility,
    submitForm,
    checkValidity,
    requiredInfo,
    utmPersonalInfoTrue,
    utmOptInTrue,
    utmValueTrue,
    utmPersonalInfoFalse,
    utmOptInFalse,
    utmValueFalse,
    uncheckBox,
    addressDataFalse,
    utmSecondaryFalse,
    catTempFalse,
    utmSecondaryTrue,
    getNoUTMURL,
    noUTMurlfilled,
    leadSourceFalse,
    sourceDetail,
    recentConversionAction,
    recentConversionActionFalse,
    UTMOnlySource
} from './components/utils'

var cta_buttons = {
    button: 'Ask',
    id: '[ctest=ask_cta]',
    contains: 'Ask a Question'
}


// TEST 1 eNewsletter CHECKED

describe(`Ask Form Test - eNews checked | NO UTM CODES`, function () {
    context('desktop', function () {
        //Validity Check
        getNoUTMURL('http://alex.');
        clickCTA(`[ctest=ask_cta]`);
        checkVisibility('[ctest=ask_cta_lightbox]', '#form-ask');
        submitForm('#form-ask-submit');
        checkValidity('#form-ask', 'form-ask');
        //Secret Marketo Form Check
        requiredInfo('#form-ask', 'form-ask')
        submitForm('#form-ask-submit');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        catTempFalse();
        utmOptInTrue();
        addressDataFalse();
    });
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
            cy.wait(2000);
        })
        getNoUTMURL('http://alex.');
        clickCTA("[tripnav-section='hamburger']");
        clickCTA("[for='mobile-ask']");
        checkVisibility('[ctest="ask-cta-card-mobile"]', '#form-ask-mobile');
        submitForm('#form-ask-submit-mobile');
        checkValidity('#form-ask-mobile', 'form-ask-mobile');
        requiredInfo('#form-ask-mobile', 'form-ask-mobile')
        submitForm('#form-ask-submit-mobile');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        catTempFalse();
        utmOptInTrue();

        addressDataFalse();
    });
})

// TEST 2 eNewsletter NOT CHECKED
// TRIPLE CHECK WITH MEGAN--should personal data be sent to Marketo as of now because we are forgetting
// about forms.nathab ? ? ?
describe(`Ask Form Test - nothing checked | NO UTM CODES`, function () {
    context('desktop', function () {
        //Validity Check
        getNoUTMURL("http://alex.");
        clickCTA(`[ctest=ask_cta]`);
        checkVisibility('[ctest=ask_cta_lightbox]', '#form-ask');
        submitForm('#form-ask-submit');
        checkValidity('#form-ask', 'form-ask');
        //Secret Marketo Form Check
        requiredInfo('#form-ask', 'form-ask')
        uncheckBox('#form-ask', '#requestNewsletter');
        submitForm('#form-ask-submit');
        utmPersonalInfoTrue();
        // utmPersonalInfoFalse();
        utmSecondaryFalse();
        // sourceDetail();
        // leadSourceFalse();
        catTempFalse();
        utmOptInFalse();
        // 
        UTMOnlySource();
        addressDataFalse();
    });

    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
            cy.wait(2000);
        })
        getNoUTMURL("http://alex.");
        clickCTA("[tripnav-section='hamburger']");
        clickCTA("[for='mobile-ask']");
        checkVisibility('[ctest="ask-cta-card-mobile"]', '#form-ask-mobile');
        submitForm('#form-ask-submit-mobile');
        checkValidity('#form-ask-mobile', 'form-ask-mobile');
        requiredInfo('#form-ask-mobile', 'form-ask-mobile')
        uncheckBox('#form-ask-mobile', '#requestNewsletter');
        submitForm('#form-ask-submit-mobile');
        utmPersonalInfoTrue();
        utmSecondaryFalse();
        // sourceDetail();
        // leadSourceFalse();
        catTempFalse();
        utmOptInFalse();
        UTMOnlySource();
        addressDataFalse();
    });
})