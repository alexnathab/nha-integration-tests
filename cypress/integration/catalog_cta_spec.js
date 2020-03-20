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
    getNoUTMURL,
    shipInfo,
    optionalPersonalInfo,
    personalInfoOptional,
    requestedAtTrue,
    catalogOptionalDesktop,
    catalogOptionalMarketoDesktop,
    catalogOptionalMobile,
    catalogOptionalMarketoMobile,
    utmValueFalse,
    utmOptInFalse,
    uncheckBox,
    catalogJoinInfo
} from './components/utils'


// describe(`Catalog Form Test | INCLUDES UTM CODES | eNEWS CHECKED`, function () {
//     context('desktop', function () {
//         //MAKES SURE FORM IS VISIBLE & WORKING
//         getURL("https://dev.", "");
//         clickCTA(`[navbar~="catalog"]`);
//         checkVisibility('[ctest="catalog-desktop"]', '#form-catalog');
//         submitForm('#form-catalog-submit');
//         checkValidity('#form-catalog', 'form-catalog');

//         //FILL OUT REQUIRED PORTION OF FORM 
//         requiredInfo('#form-catalog', 'form-catalog');
//         optionalPersonalInfo('#form-catalog', 'form-catalog')
//         shipInfo('#form-catalog', 'form-catalog');
//         submitForm('#form-catalog-submit');

//         //CHECK MARKETO FORM FOR INTIAL INFORMATION
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         personalInfoOptional();
//         utmOptInTrue();
//         utmValueTrue();
//         requestedAtTrue();

//         //FILL OUT OPTIONAL PORTION OF FORM
//         catalogOptionalDesktop('#form-catalog', 'form-catalog');
//         submitForm('#form-catalog-submit');

//         //CHECK MARKETO FORM FOR OPTIONAL INFO
//         catalogJoinInfo();
//         catalogOptionalMarketoDesktop();
//     })
//     context('mobile', function () {
//         beforeEach(function () {
//             cy.viewport('iphone-6')
//             // cy.wait(500);
//         })
//         getURL("https://dev.", "");
//         clickCTA('[for="mobile-more"]');
//         clickCTA('[more-nav="button"][for="mobile-catalog"]');
//         submitForm('#form-catalog-submit-mobile');
//         checkValidity('#form-catalog-mobile', 'form-catalog-mobile');
//         //FILL OUT REQUIRED PORTION OF FORM 
//         requiredInfo('#form-catalog-mobile', 'form-catalog-mobile');
//         optionalPersonalInfo('#form-catalog-mobile', 'form-catalog-mobile')
//         shipInfo('#form-catalog-mobile', 'form-catalog-mobile');
//         submitForm('#form-catalog-submit-mobile');
//         //CHECK MARKETO FORM FOR INTIAL INFORMATION
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         personalInfoOptional();
//         utmOptInTrue();
//         utmValueTrue();
//         requestedAtTrue();
//         //FILL OUT OPTIONAL PORTION OF FORM
//         catalogOptionalMobile('#form-catalog-mobile', 'form-catalog-mobile');
//         submitForm('#form-catalog-submit-mobile');

//         //CHECK MARKETO FORM FOR OPTIONAL INFO
//         // utmPersonalInfoTrue();
//         // utmSecondaryTrue();
//         // personalInfoOptional();
//         // utmOptInTrue();
//         // utmValueTrue();
//         // requestedAtTrue();
//         catalogOptionalMarketoMobile();
//         catalogJoinInfo();

//     })
// });

describe(`Catalog Form Test | DOES NOT INCLUDE UTM CODES | eNEWS CHECKED`, function () {
    context('desktop', function () {
        //MAKES SURE FORM IS VISIBLE & WORKING
        getNoUTMURL("https://dev.");
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
        // noUTMurlfilled();

        //FILL OUT OPTIONAL PORTION OF FORM
        catalogOptionalDesktop('#form-catalog', 'form-catalog');
        submitForm('#form-catalog-submit');

        //CHECK MARKETO FORM FOR OPTIONAL INFO
        // utmPersonalInfoTrue();
        // utmSecondaryTrue();
        // personalInfoOptional();
        // utmOptInTrue();
        // noUTMurlfilled();
        // requestedAtTrue();
        catalogOptionalMarketoDesktop();
        catalogJoinInfo();
    })
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
            cy.wait(200);
        })
        getNoUTMURL("https://dev.", "");
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
        // utmValueFalse();
        //FILL OUT OPTIONAL PORTION OF FORM
        catalogOptionalMobile('#form-catalog-mobile', 'form-catalog-mobile');
        submitForm('#form-catalog-submit-mobile');

        //CHECK MARKETO FORM FOR OPTIONAL INFO
        // utmPersonalInfoTrue();
        // utmSecondaryTrue();
        // personalInfoOptional();
        // utmOptInTrue();
        // noUTMurlfilled();
        // requestedAtTrue();
        catalogOptionalMarketoMobile();
        catalogJoinInfo();

    })
});

// describe(`Catalog Form Test | INCLUDES UTM CODES | eNEWS NOT CHECKED`, function () {
//     context('desktop', function () {
//         //MAKES SURE FORM IS VISIBLE & WORKING
//         getURL("https://dev.", "");
//         clickCTA(`[navbar~="catalog"]`);
//         checkVisibility('[ctest="catalog-desktop"]', '#form-catalog');
//         submitForm('#form-catalog-submit');
//         checkValidity('#form-catalog', 'form-catalog');

//         //FILL OUT REQUIRED PORTION OF FORM 
//         requiredInfo('#form-catalog', 'form-catalog');
//         optionalPersonalInfo('#form-catalog', 'form-catalog')
//         shipInfo('#form-catalog', 'form-catalog');
//         uncheckBox('#form-catalog', '#form-catalog-requestNewsletter')
//         submitForm('#form-catalog-submit');

//         //CHECK MARKETO FORM FOR INTIAL INFORMATION
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         personalInfoOptional();
//         utmOptInFalse();
//         utmValueTrue();
//         requestedAtTrue();

//         //FILL OUT OPTIONAL PORTION OF FORM
//         catalogOptionalDesktop('#form-catalog', 'form-catalog');
//         submitForm('#form-catalog-submit');

//         //CHECK MARKETO FORM FOR OPTIONAL INFO

//         catalogOptionalMarketoDesktop();
//         catalogJoinInfo();
//         // utmPersonalInfoTrue();
//         // utmSecondaryTrue();
//         // personalInfoOptional();
//         // utmOptInFalse();
//         // utmValueTrue();
//         // requestedAtTrue();

//     })
//     context('mobile', function () {
//         beforeEach(function () {
//             cy.viewport('iphone-6')
//             cy.wait(500);
//         })
//         getURL("https://dev.", "");
//         clickCTA('[for="mobile-more"]');
//         clickCTA('[more-nav="button"][for="mobile-catalog"]');
//         submitForm('#form-catalog-submit-mobile');
//         checkValidity('#form-catalog-mobile', 'form-catalog-mobile');
//         //FILL OUT REQUIRED PORTION OF FORM 
//         requiredInfo('#form-catalog-mobile', 'form-catalog-mobile');
//         optionalPersonalInfo('#form-catalog-mobile', 'form-catalog-mobile')
//         shipInfo('#form-catalog-mobile', 'form-catalog-mobile');
//         uncheckBox('#form-catalog-mobile', '#form-catalog-mobile-requestNewsletter')
//         submitForm('#form-catalog-submit-mobile');
//         //CHECK MARKETO FORM FOR INTIAL INFORMATION
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         personalInfoOptional();
//         utmOptInFalse();
//         utmValueTrue();
//         requestedAtTrue();
//         //FILL OUT OPTIONAL PORTION OF FORM
//         catalogOptionalMobile('#form-catalog-mobile', 'form-catalog-mobile');
//         submitForm('#form-catalog-submit-mobile');

//         //CHECK MARKETO FORM FOR OPTIONAL INFO
//         // utmPersonalInfoTrue();
//         // utmSecondaryTrue();
//         // personalInfoOptional();
//         // utmOptInFalse();
//         // utmValueTrue();
//         // requestedAtTrue();
//         catalogJoinInfo();
//         catalogOptionalMarketoMobile();

//     })
// });
describe(`Catalog Form Test | DOES NOT INCLUDE UTM CODES | eNEWS NOT CHECKED`, function () {
    context('desktop', function () {
        //MAKES SURE FORM IS VISIBLE & WORKING
        getNoUTMURL("https://dev.")
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
        // noUTMurlfilled();

        //FILL OUT OPTIONAL PORTION OF FORM
        catalogOptionalDesktop('#form-catalog', 'form-catalog');
        submitForm('#form-catalog-submit');

        //CHECK MARKETO FORM FOR OPTIONAL INFO
        catalogJoinInfo();
        catalogOptionalMarketoDesktop();
        // utmPersonalInfoTrue();
        // utmSecondaryTrue();
        // personalInfoOptional();
        // utmOptInFalse();
        // noUTMurlfilled();
        // requestedAtTrue();

    })
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
            cy.wait(200);
        })
        getNoUTMURL("https://dev.", "");
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
        // utmValueFalse();
        //FILL OUT OPTIONAL PORTION OF FORM
        catalogOptionalMobile('#form-catalog-mobile', 'form-catalog-mobile');
        submitForm('#form-catalog-submit-mobile');

        //CHECK MARKETO FORM FOR OPTIONAL INFO
        // utmPersonalInfoTrue();
        // utmSecondaryTrue();
        // personalInfoOptional();
        // utmOptInFalse();
        // noUTMurlfilled();
        // requestedAtTrue();
        catalogJoinInfo();
        catalogOptionalMarketoMobile();


    })
});