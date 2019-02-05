import { Then } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from '../../pageobjects/home-page';

let homePage = new HomePage();

Then(`{string} column contains {string} candidate`, (columnName, candidateName) => {
    let columnSelector = getColumnSelector(columnName);
    homePage.findCrewMemberInColumnByName(columnSelector, candidateName).should('contain', candidateName);
});

Then(`{string} column does not contain {string} candidate`, (columnName, candidateName) => {
    let columnSelector = getColumnSelector(columnName);
    homePage.candidateShouldNotBeFound(columnSelector, candidateName);
});

Then(`Assert total page candidates count equals to {int}`, (expectedCount) =>{
    homePage.findAllCandidatesInAnyState().should('have.length', expectedCount);   
});

Then(`Assert {string} column contains candidates count equals {int}`, (columnName, expectedCount) =>{
    let columnSelector = getColumnSelector(columnName);
    homePage.getAllCandidatesOfColumn(columnSelector).should('have.length', expectedCount);   
});

Then(`Candidates of {string} should be sorted in the following order {string} and {string}`, (columnName, firstCandidate, secondCandidate) => {
    let columnSelector = getColumnSelector(columnName);
    let expectedOrder = [firstCandidate, secondCandidate];

    const actualNameElements = homePage.getAllCandidateNamesOfColumn(columnSelector);

        actualNameElements.should('have.length', expectedOrder.length);
        actualNameElements.each(($el, index) =>{
            expect(expectedOrder[index]).to.equal($el.text());
        });    
})

//#region Helper functions
function getColumnSelector(columnName){
    let columnSelector;
    switch (columnName) {
        case 'Applied':
            columnSelector = '#AppliedColumn'
            break;
        case 'Interviewing':
            columnSelector = '#InterviewingColumn'
            break;
        case 'Hired':
            columnSelector = '#HiredColumn'
            break;
        default:
            throw new Error("No such column");
    }

    return columnSelector;
}

//#endregion