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
    recentConversionActionFalse
} from './components/utils'

var cta_buttons = {
    button: 'Ask',
    id: '[ctest=ask_cta]',
    contains: 'Ask a Question'
}


// TEST 1 eNewsletter CHECKED

describe(`Ask Form Test - eNews checked | INCLUDES UTM CODES`, function () {
    //Validity Check
    getURL('alex.', '');
    clickCTA(`${cta_buttons.id}`);
    checkVisibility('[ctest=ask_cta_lightbox]', '#form-ask');
    submitForm('#form-ask-submit');
    checkValidity('#form-ask');
    //Secret Marketo Form Check
    requiredInfo('#form-ask')
    submitForm('#form-ask-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    catTempFalse();
    utmOptInTrue();
    utmValueTrue();
    addressDataFalse();
})

describe(`Ask Form Test - eNews checked | NO UTM CODES`, function () {
    //Validity Check
    getNoUTMURL('alex.');
    clickCTA(`${cta_buttons.id}`);
    checkVisibility('[ctest=ask_cta_lightbox]', '#form-ask');
    submitForm('#form-ask-submit');
    checkValidity('#form-ask');
    //Secret Marketo Form Check
    requiredInfo('#form-ask')
    submitForm('#form-ask-submit');
    utmPersonalInfoTrue();
    utmSecondaryTrue();
    catTempFalse();
    utmOptInTrue();
    noUTMurlfilled();
    addressDataFalse();
})

// TEST 2 eNewsletter NOT CHECKED
//TRIPLE CHECK WITH MEGAN -- should personal data be sent to Marketo as of now because we are forgetting
//about forms.nathab???

describe(`Ask Form Test - nothing checked | INCLUDES UTM CODES`, function () {
    context('desktop', function () {
        //Validity Check
        getURL("alex.", '');
        clickCTA(`${cta_buttons.id}`);
        checkVisibility('[ctest=ask_cta_lightbox]', '#form-ask');
        submitForm('#form-ask-submit');
        checkValidity('#form-ask');
        //Secret Marketo Form Check
        requiredInfo('#form-ask')
        uncheckBox('#form-ask', '#requestNewsletter');
        submitForm('#form-ask-submit');
        utmPersonalInfoFalse();
        // utmSecondaryFalse();
        leadSourceFalse();
        sourceDetail();
        catTempFalse();
        utmOptInFalse();
        utmValueFalse();
        recentConversionActionFalse();
        addressDataFalse();
    });
    // context('mobile', function () {
    //     beforeEach(function () {
    //         cy.viewport('iphone-6')
    //         cy.wait(2000);
    //     })
    //     getURL("alex.", '');
    //     clickCTA("[tripnav-section='hamburger']");
    //     clickCTA("[for='mobile-ask']");
    //     checkVisibility('[ctest="ask-cta-card-mobile"]', '#form-ask-mobile');
    //     submitForm('#form-ask-submit-mobile');
    //     checkValidity('#form-ask-mobile');
    //     requiredInfo('#form-ask-mobile')
    //     uncheckBox('#form-ask-mobile', '#requestNewsletter');
    //     submitForm('#form-ask-submit-mobile');
    //     utmPersonalInfoFalse();
    //     // utmSecondaryFalse();
    //     leadSourceFalse();
    //     sourceDetail();
    //     catTempFalse();
    //     utmOptInFalse();
    //     utmValueFalse();
    //     addressDataFalse();
    // });
})
describe(`Ask Form Test - nothing checked | NO UTM CODES`, function () {
    //Validity Check
    getNoUTMURL("alex.");
    clickCTA(`${cta_buttons.id}`);
    checkVisibility('[ctest=ask_cta_lightbox]', '#form-ask');
    submitForm('#form-ask-submit');
    checkValidity('#form-ask');
    //Secret Marketo Form Check
    requiredInfo('#form-ask')
    uncheckBox('#form-ask', '#requestNewsletter');
    submitForm('#form-ask-submit');
    utmPersonalInfoFalse();
    sourceDetail();
    leadSourceFalse();
    catTempFalse();
    utmOptInFalse();
    utmValueFalse();
    addressDataFalse();
})