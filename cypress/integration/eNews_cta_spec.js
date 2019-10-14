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
    utmSecondaryTrue
} from './components/utils'

var cta_buttons = {
    button: 'eNews',
    id: '[ctest=enews_utm]',
    contains: 'eNEWS'
}

describe(`eNews Form Test`, function () {
    //Validity Check
    getURL('https://dev.', '');
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
});