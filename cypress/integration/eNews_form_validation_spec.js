import {
    getURL,
    clickCTA,
    checkVisibility,
    submitForm,
    checkValidity
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

describe(`Submits empty form but is unable to move on and is prompted with red outline on required fields`, function () {
    getURL(`${dev_sites[0].prefix}`);
    clickCTA(`${cta_buttons.id}`);
    checkVisibility('[ctest=utm_enews]', '#form-enews');
    submitForm('#form-enews-submit');
    checkValidity('#form-enews');
});