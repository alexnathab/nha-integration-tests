import {
    getURL,
    clickCTA,
    checkVisibility,
    submitForm,
    checkValidity,
    requiredInfo,
    utmPersonalInfoTrue,
    utmOptInTrue,
    utmSecondaryTrue,
    requestedAtTrue
} from './components/utils'

describe(`eNews Form Test | NO UTM CODES`, function () {
    context('desktop', function () {
        getURL();
        clickCTA(`[ctest=enews_utm]`);
        checkVisibility('[ctest=utm_enews]', '#form-enews');
        submitForm('#form-enews-submit');
        checkValidity('#form-enews', 'form-enews');
        //Secret Marketo Form Check
        requiredInfo('#form-enews', 'form-enews');
        submitForm('#form-enews-submit');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        utmOptInTrue();
        requestedAtTrue();
    })
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
        })
        getURL();
        clickCTA('[for="mobile-more"]');
        clickCTA('[more-nav="button"][for="mobile-enews"]');
        submitForm('#form-enews-submit-mobile');
        checkValidity('#form-enews-mobile', 'form-enews-mobile');
        requiredInfo('#form-enews-mobile', 'form-enews-mobile');
        submitForm('#form-enews-submit-mobile');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        utmOptInTrue();
        requestedAtTrue();
    })
});