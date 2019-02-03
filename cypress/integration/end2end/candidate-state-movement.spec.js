import HomePageSteps from '../../step-helpers/home-page-steps';
import HomePageAssertions from '../../assert-helpers/home-page-assertions';

describe('Candidates state movement tests', function() {
    const homePageSteps = new HomePageSteps();
    const homePageAssert = new HomePageAssertions();

    const searchName = 'danielle moore';
    const InterviewingColumn = '#InterviewingColumn';
    const HiredColumn = '#HiredColumn';

    beforeEach( function() {
        homePageSteps.openHomePage();
    })
    
    it(`Move next button moves candidate Applied--> Interviewing`, function () {
        //Arrange
        
        //Act
        homePageSteps.clickMoveNextStateButtonFor(searchName);

        //Assert
        homePageAssert.assertExpectedColumnContainsExpectedMember(InterviewingColumn, searchName);
        homePageAssert.assertExpectedColumnContainsExpectedElementsNumber(InterviewingColumn, 1);        
    })

    it(`Move next button moves candidate Interviewing--> Hired`, function () {
        //Arrange
        
        //Act
        homePageSteps.clickMoveNextStateButtonFor(searchName);
        homePageSteps.clickMoveNextStateButtonFor(searchName);

        //Assert
        homePageAssert.assertExpectedColumnContainsExpectedMember(HiredColumn, searchName);
        homePageAssert.assertExpectedColumnContainsExpectedElementsNumber(HiredColumn, 2);        
    })

    it(`Move previous button moves candidate Hired --> Interviewing`, function () {
        //Arrange
        let name = 'julia cunningham';
        
        //Act
        homePageSteps.clickMovePreviousStateButtonFor(name);

        //Assert
        homePageAssert.assertExpectedColumnContainsExpectedMember(InterviewingColumn, name);
        homePageAssert.assertExpectedColumnContainsExpectedElementsNumber(InterviewingColumn, 1);        
    })

    //Looks like sortation is the same as it was in Applied Column
    it(`Moved candidates have been sorted in expected order`, function () {
        //Arrange
        let name1 = 'lloyd gonzalez';
        let name2 = 'danielle moore';
        
        //Act
        homePageSteps.clickMoveNextStateButtonFor(name2);
        homePageSteps.clickMoveNextStateButtonFor(name1);

        //Assert
        let orderedExpectedNames = [name1, name2];
        homePageAssert.assertMembersSortedInExpectedOrderForColumn(InterviewingColumn, orderedExpectedNames);             
    })
})