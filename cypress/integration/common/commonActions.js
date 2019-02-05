import { Given } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from '../../pageobjects/home-page';

let homePage = new HomePage();

When(`User clicks next button of candidate {string}`, (candidateName)=>{
    homePage.getCrewMemberUpButton(candidateName).click();
})