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
    utmSecondaryTrue,
    noUTMurlfilled,
    getNoUTMURL
} from './components/utils'

var cta_buttons = {
    button: 'eNews',
    id: '[ctest=enews_utm]',
    contains: 'eNEWS'
}

describe(`eNews Form Test | INCLUDES UTM CODES`, function () {
    context('desktop', function () {
        it(`Visits a trip specific url with UTM codes in the queries`, function () {
            //the following string is full of queries and thus is being used for testing
            cy.visit(`alex.nathab.com/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
        });
        clickCTA(`${cta_buttons.id}`);
        checkVisibility('[ctest=utm_enews]', '#form-enews');
        submitForm('#form-enews-submit');
        checkValidity('#form-enews');
        //Secret Marketo Form Check
        requiredInfo('#form-enews');
        submitForm('#form-enews-submit');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        utmOptInTrue();
        utmValueTrue();
    })
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
            cy.wait(2000);
        })
        getURL("alex.", "");
        clickCTA('[for="mobile-more"]');
        clickCTA('[more-nav="button"][for="mobile-enews"]');
        submitForm('#form-enews-submit-mobile');
        checkValidity('#form-enews-mobile');
        requiredInfo('#form-enews-mobile');
        submitForm('#form-enews-submit-mobile');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        utmOptInTrue();
        utmValueTrue();
    })
});

describe(`eNews Form Test | NO UTM CODES`, function () {
    context('desktop', function () {
        getNoUTMURL("alex.");
        clickCTA(`${cta_buttons.id}`);
        checkVisibility('[ctest=utm_enews]', '#form-enews');
        submitForm('#form-enews-submit');
        checkValidity('#form-enews');
        //Secret Marketo Form Check
        requiredInfo('#form-enews');
        submitForm('#form-enews-submit');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        utmOptInTrue();
        noUTMurlfilled();
    })
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
            cy.wait(2000);
        })
        getNoUTMURL("alex.");
        clickCTA('[for="mobile-more"]');
        clickCTA('[more-nav="button"][for="mobile-enews"]');
        submitForm('#form-enews-submit-mobile');
        checkValidity('#form-enews-mobile');
        requiredInfo('#form-enews-mobile');
        submitForm('#form-enews-submit-mobile');
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        utmOptInTrue();
        noUTMurlfilled();
    })
});