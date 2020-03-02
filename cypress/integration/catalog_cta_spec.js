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
    uncheckBox
} from './components/utils'


// describe(`Catalog Form Test | INCLUDES UTM CODES | eNEWS CHECKED`, function () {
//     // context('desktop', function () {
//     //     //MAKES SURE FORM IS VISIBLE & WORKING
//     //     it(`Visits a trip specific url with UTM codes in the queries`, function () {
//     //         //the following string is full of queries and thus is being used for testing
//     //         cy.visit(`https://dev.nathab.com/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
//     //     });
//     //     clickCTA(`[navbar~="catalog"]`);
//     //     checkVisibility('[ctest="catalog-desktop"]', '#form-catalog');
//     //     submitForm('#form-catalog-submit');
//     //     checkValidity('#form-catalog', 'form-catalog');

//     //     //FILL OUT REQUIRED PORTION OF FORM 
//     //     requiredInfo('#form-catalog', 'form-catalog');
//     //     optionalPersonalInfo('#form-catalog', 'form-catalog')
//     //     shipInfo('#form-catalog', 'form-catalog');
//     //     submitForm('#form-catalog-submit');

//     //     //CHECK MARKETO FORM FOR INTIAL INFORMATION
//     //     utmPersonalInfoTrue();
//     //     utmSecondaryTrue();
//     //     personalInfoOptional();
//     //     utmOptInTrue();
//     //     utmValueTrue();
//     //     requestedAtTrue();

//     //     //FILL OUT OPTIONAL PORTION OF FORM
//     //     catalogOptionalDesktop('#form-catalog', 'form-catalog');
//     //     submitForm('#form-catalog-submit');

//     //     //CHECK MARKETO FORM FOR OPTIONAL INFO
//     //     catalogOptionalMarketoDesktop();
//     // })
//     context('mobile', function () {
//         beforeEach(function () {
//             cy.viewport('iphone-6')
//             cy.wait(2000);
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
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         personalInfoOptional();
//         utmOptInTrue();
//         utmValueTrue();
//         requestedAtTrue();
//         catalogOptionalMarketoMobile();

//     })
// });

// describe(`Catalog Form Test | DOES NOT INCLUDE UTM CODES | eNEWS CHECKED`, function () {
// context('desktop', function () {
//     //MAKES SURE FORM IS VISIBLE & WORKING
//     // it(`Visits a trip specific url with UTM codes in the queries`, function () {
//     //     //the following string is full of queries and thus is being used for testing
//     //     cy.visit(`https://dev.nathab.com/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
//     // });
//     getNoUTMURL("https://dev.");
//     clickCTA(`[navbar~="catalog"]`);
//     checkVisibility('[ctest="catalog-desktop"]', '#form-catalog');
//     submitForm('#form-catalog-submit');
//     checkValidity('#form-catalog', 'form-catalog');

//     //FILL OUT REQUIRED PORTION OF FORM 
//     requiredInfo('#form-catalog', 'form-catalog');
//     optionalPersonalInfo('#form-catalog', 'form-catalog')
//     shipInfo('#form-catalog', 'form-catalog');
//     submitForm('#form-catalog-submit');

//     //CHECK MARKETO FORM FOR INTIAL INFORMATION
//     utmPersonalInfoTrue();
//     utmSecondaryTrue();
//     personalInfoOptional();
//     utmOptInTrue();
//     noUTMurlfilled();
//     requestedAtTrue();

//     //FILL OUT OPTIONAL PORTION OF FORM
//     catalogOptionalDesktop('#form-catalog', 'form-catalog');
//     submitForm('#form-catalog-submit');

//     //CHECK MARKETO FORM FOR OPTIONAL INFO
//      utmPersonalInfoTrue();
//      utmSecondaryTrue();
//      personalInfoOptional();
//      utmOptInTrue();
//      noUTMurlfilled();
//      requestedAtTrue();
//     catalogOptionalMarketoDesktop();
// })
// context('mobile', function () {
//     beforeEach(function () {
//         cy.viewport('iphone-6')
//         cy.wait(2000);
//     })
//     getNoUTMURL("https://dev.", "");
//     clickCTA('[for="mobile-more"]');
//     clickCTA('[more-nav="button"][for="mobile-catalog"]');
//     submitForm('#form-catalog-submit-mobile');
//     checkValidity('#form-catalog-mobile', 'form-catalog-mobile');
//     //FILL OUT REQUIRED PORTION OF FORM 
//     requiredInfo('#form-catalog-mobile', 'form-catalog-mobile');
//     optionalPersonalInfo('#form-catalog-mobile', 'form-catalog-mobile')
//     shipInfo('#form-catalog-mobile', 'form-catalog-mobile');
//     submitForm('#form-catalog-submit-mobile');
//     //CHECK MARKETO FORM FOR INTIAL INFORMATION
//     utmPersonalInfoTrue();
//     utmSecondaryTrue();
//     personalInfoOptional();
//     utmOptInTrue();
//     noUTMurlfilled();
//     requestedAtTrue();
//     //FILL OUT OPTIONAL PORTION OF FORM
//     catalogOptionalMobile('#form-catalog-mobile', 'form-catalog-mobile');
//     submitForm('#form-catalog-submit-mobile');

//     //CHECK MARKETO FORM FOR OPTIONAL INFO
//     utmPersonalInfoTrue();
//     utmSecondaryTrue();
//     personalInfoOptional();
//     utmOptInTrue();
//     noUTMurlfilled();
//     requestedAtTrue();
//     catalogOptionalMarketoMobile();

// })
// });

// describe(`Catalog Form Test | INCLUDES UTM CODES | eNEWS NOT CHECKED`, function () {
//     context('desktop', function () {
//         //MAKES SURE FORM IS VISIBLE & WORKING
//         it(`Visits a trip specific url with UTM codes in the queries`, function () {
//             //the following string is full of queries and thus is being used for testing
//             cy.visit(`https://dev.nathab.com/?banner&utm_source=TEST&utm_medium=TEST&utm_content=TEST&utm_campaign=TEST&utm_term=TEST`);
//         });
//         clickCTA(`[navbar~="catalog"]`);
//         checkVisibility('[ctest="catalog-desktop"]', '#form-catalog');
//         submitForm('#form-catalog-submit');
//         checkValidity('#form-catalog', 'form-catalog');

//         //FILL OUT REQUIRED PORTION OF FORM 
//         requiredInfo('#form-catalog', 'form-catalog');
//         optionalPersonalInfo('#form-catalog', 'form-catalog')
//         shipInfo('#form-catalog', 'form-catalog');
//         uncheckBox('#form-catalog', '#requestNewsletter')
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
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         personalInfoOptional();
//         utmOptInFalse();
//         utmValueTrue();
//         requestedAtTrue();

//     })
//     context('mobile', function () {
//         beforeEach(function () {
//             cy.viewport('iphone-6')
//             cy.wait(2000);
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
//         uncheckBox('#form-catalog-mobile', '#requestNewsletter')
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
//         utmPersonalInfoTrue();
//         utmSecondaryTrue();
//         personalInfoOptional();
//         utmOptInFalse();
//         utmValueTrue();
//         requestedAtTrue();
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
        uncheckBox('#form-catalog', '#requestNewsletter')
        submitForm('#form-catalog-submit');

        //CHECK MARKETO FORM FOR INTIAL INFORMATION
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        personalInfoOptional();
        utmOptInFalse();
        noUTMurlfilled();
        requestedAtTrue();

        //FILL OUT OPTIONAL PORTION OF FORM
        catalogOptionalDesktop('#form-catalog', 'form-catalog');
        submitForm('#form-catalog-submit');

        //CHECK MARKETO FORM FOR OPTIONAL INFO
        catalogOptionalMarketoDesktop();
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        personalInfoOptional();
        utmOptInFalse();
        noUTMurlfilled();
        requestedAtTrue();

    })
    context('mobile', function () {
        beforeEach(function () {
            cy.viewport('iphone-6')
            cy.wait(2000);
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
        uncheckBox('#form-catalog-mobile', '#requestNewsletter')
        submitForm('#form-catalog-submit-mobile');
        //CHECK MARKETO FORM FOR INTIAL INFORMATION
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        personalInfoOptional();
        utmOptInFalse();
        noUTMurlfilled();
        requestedAtTrue();
        //FILL OUT OPTIONAL PORTION OF FORM
        catalogOptionalMobile('#form-catalog-mobile', 'form-catalog-mobile');
        submitForm('#form-catalog-submit-mobile');

        //CHECK MARKETO FORM FOR OPTIONAL INFO
        utmPersonalInfoTrue();
        utmSecondaryTrue();
        personalInfoOptional();
        utmOptInFalse();
        noUTMurlfilled();
        requestedAtTrue();
        catalogOptionalMarketoMobile();

    })
});