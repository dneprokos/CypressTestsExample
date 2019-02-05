import { When } from "cypress-cucumber-preprocessor/steps";

import { HomePage } from '../../../pageobjects/home-page';

let homePage = new HomePage();

When(`User clicks next button of candidate {string}`, (candidateName)=>{
    homePage.getCrewMemberUpButton(candidateName).click();
})

When(`User clicks back button of candidate {string}`, (candidateName)=>{
    homePage.getCrewMemberDownButton(candidateName).click();
})

