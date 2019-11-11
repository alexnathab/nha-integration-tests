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
    uncheckBox
} from './components/utils'

var cta_buttons = {
    button: 'Ask',
    id: '[ctest=ask_cta]',
    contains: 'Ask a Question'
}


// TEST 1 eNewsletter CHECKED

describe(`Ask Form Test - eNews checked`, function () {
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
    utmOptInTrue();
    utmValueTrue();
})

// TEST 2 eNewsletter NOT CHECKED

describe(`Ask Form Test - nothing checked`, function () {
    //Validity Check
    getURL('alex.', '');
    clickCTA(`${cta_buttons.id}`);
    checkVisibility('[ctest=ask_cta_lightbox]', '#form-ask');
    submitForm('#form-ask-submit');
    checkValidity('#form-ask');
    //Secret Marketo Form Check
    requiredInfo('#form-ask')
    uncheckBox('#form-ask', '#requestNewsletter');
    submitForm('#form-ask-submit');
    utmPersonalInfoFalse();
    utmOptInFalse();
    utmValueFalse();
})