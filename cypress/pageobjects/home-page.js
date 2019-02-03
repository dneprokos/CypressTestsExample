class HomePage {

    getNameField() {
        return cy.get('#name');
    }

    getCityField() {
        return cy.get('#city');    
    }

    getSubmitButton() {
        return cy.get('#filters')
        .find('button[type="submit"]');
    }

    getClearButton() {
        return cy.get('#filters')
        .find('button[type="button"]');
    }

    getAllCandidatesOfColumn(columnName){
        return cy.get(`${columnName} div div.CrewMember-container`);
    }

    getAllCandidateNamesOfColumn(columnName){
       return cy.get(`${columnName} div div.CrewMember-container`)
        .find('div.CrewMember-info div.CrewMemeber-name div:first');          
    }
    
    findCrewMemberInColumnByName(columnName, memberName){
        return cy
                .get(`${columnName} div div.CrewMember-container`)
                .filter(`:contains("${memberName}")`);
    }

    getCrewMemberUpButton(memberName){
        return cy.get(`div.CrewMember-container`)
        .filter(`:contains("${memberName}")`)
        .find(`button.CrewMember-up`);
    }

    getCrewMemberDownButton(memberName){
        return cy.get(`div.CrewMember-container`)
        .filter(`:contains("${memberName}")`)
        .find(`button:not(.CrewMember-up)`);
    }

    findAllCandidatesInAnyState(){
        return cy.get('div.CrewMember-container')
    }

    getAppliedCandidateNameElement() {
        return cy.get('#AppliedColumn')
        .find('div div.CrewMember-container') 
        .find('div.CrewMember-info div.CrewMemeber-name div:first');
    }
}

export default HomePage;