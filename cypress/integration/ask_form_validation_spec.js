import {
    getURL,
    clickCTA,
    checkVisibility,
    submitForm,
    checkValidity
} from './components/utils'

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

var cta_buttons = {
    button: 'Ask',
    id: '[ctest=ask_cta]',
    contains: 'Ask a Question'
}

describe(`Submits empty form but is unable to move on and is prompted with red outline on required fields`, function () {
    getURL(`${dev_sites[0].prefix}`);
    clickCTA(`${cta_buttons.id}`);
    checkVisibility('[ctest=ask_cta_lightbox]', '#form-ask');
    submitForm('#form-ask-submit');
    checkValidity('#form-ask');
});