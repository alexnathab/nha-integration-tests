import {
    getURL,
    clickCTA,
    checkVisibility,
    submitForm,
    checkValidity,
    requiredInfo,
    utmPersonalInfoTrue,
    utmOptInTrue,
    utmOptInFalse,
    uncheckBox,
    utmSecondaryFalse,
    catTempFalse,
    utmSecondaryTrue,
    requestedAtTrue
} from './components/utils'

describe(`Ask Form Test - eNews checked | NO UTM CODES`, function () {
    context('desktop', function () {
        //Validity Check
        getURL();
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
        // noUTMurlfilled();
        requestedAtTrue();
        // addressDataFalse();
    });
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
        })
        getURL();
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
        requestedAtTrue();
    });
})

describe(`Ask Form Test - nothing checked | NO UTM CODES`, function () {
    context('desktop', function () {
        //Validity Check
        getURL();
        clickCTA(`[ctest=ask_cta]`);
        checkVisibility('[ctest=ask_cta_lightbox]', '#form-ask');
        submitForm('#form-ask-submit');
        checkValidity('#form-ask', 'form-ask');
        //Secret Marketo Form Check
        requiredInfo('#form-ask', 'form-ask')
        uncheckBox('#form-ask', '#form-ask-requestNewsletter');
        submitForm('#form-ask-submit');
        utmPersonalInfoTrue();
        utmSecondaryFalse();
        catTempFalse();
        utmOptInFalse();
        requestedAtTrue();
    });

    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
        })
        getURL();
        clickCTA("[tripnav-section='hamburger']");
        clickCTA("[for='mobile-ask']");
        checkVisibility('[ctest="ask-cta-card-mobile"]', '#form-ask-mobile');
        submitForm('#form-ask-submit-mobile');
        checkValidity('#form-ask-mobile', 'form-ask-mobile');
        requiredInfo('#form-ask-mobile', 'form-ask-mobile')
        uncheckBox('#form-ask-mobile', '#form-ask-mobile-requestNewsletter');
        submitForm('#form-ask-submit-mobile');
        utmPersonalInfoTrue();
        utmSecondaryFalse();
        catTempFalse();
        utmOptInFalse();
        requestedAtTrue();
    });
})