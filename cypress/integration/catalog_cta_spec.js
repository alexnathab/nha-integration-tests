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
    shipInfo,
    optionalPersonalInfo,
    personalInfoOptional,
    requestedAtTrue,
    catalogOptionalDesktop,
    catalogOptionalMarketoDesktop,
    catalogOptionalMobile,
    catalogOptionalMarketoMobile,
    utmOptInFalse,
    uncheckBox,
    catalogJoinInfo
} from './components/utils'

describe(`Catalog Form Test | DOES NOT INCLUDE UTM CODES | eNEWS CHECKED`, function () {
    context('desktop', function () {
        //MAKES SURE FORM IS VISIBLE & WORKING
        getURL();
        clickCTA(`[navbar~="catalog"]`);
        checkVisibility('[ctest="catalog-desktop"]', '#form-catalog');
        submitForm('#form-catalog-submit');
        checkValidity('#form-catalog', 'form-catalog');

        //FILL OUT REQUIRED PORTION OF FORM 
        requiredInfo('#form-catalog', 'form-catalog');
        optionalPersonalInfo('#form-catalog', 'form-catalog')
        shipInfo('#form-catalog', 'form-catalog');
        submitForm('#form-catalog-submit');

        //CHECK MARKETO FORM FOR INTIAL INFORMATION
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        personalInfoOptional();
        requestedAtTrue();
        utmOptInTrue();

        //FILL OUT OPTIONAL PORTION OF FORM
        catalogOptionalDesktop('#form-catalog', 'form-catalog');
        submitForm('#form-catalog-submit');

        //CHECK MARKETO FORM FOR OPTIONAL INFO
        catalogOptionalMarketoDesktop();
        catalogJoinInfo();
    })
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
        })
        getURL();
        clickCTA('[for="mobile-more"]');
        clickCTA('[more-nav="button"][for="mobile-catalog"]');
        submitForm('#form-catalog-submit-mobile');
        checkValidity('#form-catalog-mobile', 'form-catalog-mobile');
        //FILL OUT REQUIRED PORTION OF FORM 
        requiredInfo('#form-catalog-mobile', 'form-catalog-mobile');
        optionalPersonalInfo('#form-catalog-mobile', 'form-catalog-mobile')
        shipInfo('#form-catalog-mobile', 'form-catalog-mobile');
        submitForm('#form-catalog-submit-mobile');
        //CHECK MARKETO FORM FOR INTIAL INFORMATION
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        personalInfoOptional();
        requestedAtTrue();
        utmOptInTrue();

        //FILL OUT OPTIONAL PORTION OF FORM
        catalogOptionalMobile('#form-catalog-mobile', 'form-catalog-mobile');
        submitForm('#form-catalog-submit-mobile');

        //CHECK MARKETO FORM FOR OPTIONAL INFO
        catalogOptionalMarketoMobile();
        catalogJoinInfo();

    })
});


describe(`Catalog Form Test | DOES NOT INCLUDE UTM CODES | eNEWS NOT CHECKED`, function () {
    context('desktop', function () {
        //MAKES SURE FORM IS VISIBLE & WORKING
        getURL();
        clickCTA(`[navbar~="catalog"]`);
        checkVisibility('[ctest="catalog-desktop"]', '#form-catalog');
        submitForm('#form-catalog-submit');
        checkValidity('#form-catalog', 'form-catalog');

        //FILL OUT REQUIRED PORTION OF FORM 
        requiredInfo('#form-catalog', 'form-catalog');
        optionalPersonalInfo('#form-catalog', 'form-catalog')
        shipInfo('#form-catalog', 'form-catalog');
        uncheckBox('#form-catalog', '#form-catalog-requestNewsletter')
        submitForm('#form-catalog-submit');

        //CHECK MARKETO FORM FOR INTIAL INFORMATION
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        personalInfoOptional();
        requestedAtTrue();
        utmOptInFalse();

        //FILL OUT OPTIONAL PORTION OF FORM
        catalogOptionalDesktop('#form-catalog', 'form-catalog');
        submitForm('#form-catalog-submit');

        //CHECK MARKETO FORM FOR OPTIONAL INFO
        catalogJoinInfo();
        catalogOptionalMarketoDesktop();

    })
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
        })
        getURL();
        clickCTA('[for="mobile-more"]');
        clickCTA('[more-nav="button"][for="mobile-catalog"]');
        submitForm('#form-catalog-submit-mobile');
        checkValidity('#form-catalog-mobile', 'form-catalog-mobile');

        //FILL OUT REQUIRED PORTION OF FORM 
        requiredInfo('#form-catalog-mobile', 'form-catalog-mobile');
        optionalPersonalInfo('#form-catalog-mobile', 'form-catalog-mobile')
        shipInfo('#form-catalog-mobile', 'form-catalog-mobile');
        uncheckBox('#form-catalog-mobile', '#form-catalog-mobile-requestNewsletter')
        submitForm('#form-catalog-submit-mobile');

        //CHECK MARKETO FORM FOR INTIAL INFORMATION
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        personalInfoOptional();
        requestedAtTrue();
        utmOptInFalse();

        //FILL OUT OPTIONAL PORTION OF FORM
        catalogOptionalMobile('#form-catalog-mobile', 'form-catalog-mobile');
        submitForm('#form-catalog-submit-mobile');

        //CHECK MARKETO FORM FOR OPTIONAL INFO
        catalogJoinInfo();
        catalogOptionalMarketoMobile();
    })
});