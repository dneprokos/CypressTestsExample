import HomePage from '../pageobjects/home-page';

class HomePageAssertions {
    constructor(){
        this.homePage = new HomePage();
    }
    
    assertExpectedColumnContainsExpectedMember(expectedColumnSelector, memberName){        
        this.homePage.findCrewMemberInColumnByName(expectedColumnSelector, memberName).should('contain', memberName)
    }

    assertExpectedColumnContainsExpectedElementsNumber(expectedColumnSelector, expectedCount){
        this.homePage.getAllCandidatesOfColumn(expectedColumnSelector).should('have.length', expectedCount);
    }

    assertPageContainsExpectedCandidatesCount(expectedCount){
        this.homePage.findAllCandidatesInAnyState().should('have.length', expectedCount);
    }

    assertMembersSortedInExpectedOrderForColumn(expectedColumnSelector, orderedExpectedNames){
        const actualNameElements = this.homePage.getAllCandidateNamesOfColumn(expectedColumnSelector);

        actualNameElements.should('have.length', orderedExpectedNames.length);
        actualNameElements.each(($el, index, $list) =>{
            expect(orderedExpectedNames[index]).to.equal($el.text());
        });                              
    }
}

export default HomePageAssertions;