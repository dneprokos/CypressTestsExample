import { When } from "cypress-cucumber-preprocessor/steps";

import { HomePage } from '../../../pageobjects/home-page';

let homePage = new HomePage();

When(`User inputs {string} to the name field`, name => {
    homePage.getNameField().type(name);
});

When(`User inputs {string} to the city field`, name => {
    homePage.getCityField().type(name);
});

When(`User clicks Submit button`, name => {
    homePage.getSubmitButton().click();
});

When(`User clicks Clear button`, name => {
    homePage.getClearButton().click();
});





