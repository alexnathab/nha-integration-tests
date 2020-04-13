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

var templatesToCheck = ["alex.nathab.com", "alex.nathab.com/africa/botswana-explorer-safari/"]

for (let i = 0; i < templatesToCheck.length; i++) {

    describe(`eNews Form Test | NO UTM CODES`, function () {
        context('desktop', function () {
            it(`Visits a trip specific url with UTM codes in the queries`, function () {
                cy.visit(templatesToCheck[i]);
            });
            clickCTA(`${cta_buttons.id}`);
            checkVisibility('[ctest=utm_enews]', '#form-enews');
            submitForm('#form-enews-submit');
            checkValidity('#form-enews', 'form-enews');
            //Secret Marketo Form Check
            requiredInfo('#form-enews', 'form-enews');
            submitForm('#form-enews-submit');
            utmPersonalInfoTrue();
            utmSecondaryTrue();
            utmOptInTrue();

        })
        context('mobile', function () {
            beforeEach(function () {
                cy.viewport('iphone-6')
                cy.wait(2000);
            })
            it(`Visits a trip specific url with UTM codes in the queries`, function () {
                cy.visit(templatesToCheck[i]);
            });
            clickCTA('[for="mobile-more"]');
            clickCTA('[more-nav="button"][for="mobile-enews"]');
            submitForm('#form-enews-submit-mobile');
            checkValidity('#form-enews-mobile', 'form-enews-mobile');
            requiredInfo('#form-enews-mobile', 'form-enews-mobile');
            submitForm('#form-enews-submit-mobile');
            utmPersonalInfoTrue();
            utmSecondaryTrue();
            utmOptInTrue();

        })
    });
}