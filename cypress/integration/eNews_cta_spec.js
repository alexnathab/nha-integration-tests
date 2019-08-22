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

var dev_sites = [{
        branch: "Alex",
        prefix: "alex."
    },
    {
        branch: "Chris",
        prefix: "solo."
    },
    {
        branch: "Dev",
        prefix: "https://dev."
    },
    {
        branch: "Master",
        prefix: "https://www."
    }
]


describe(`eNews Form Test`, function () {
    //Validity Check
    getURL(`${dev_sites[0].prefix}`, '');
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