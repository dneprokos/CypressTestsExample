import HomePageSteps from '../../step-helpers/home-page-steps';
import HomePageAssertions from '../../assert-helpers/home-page-assertions';

describe('Candidates filter tests', function() {
    const homePageSteps = new HomePageSteps();
    const homePageAssert = new HomePageAssertions();

    const searchName = 'danielle moore';
    const searchCity = 'worcester';
    const AppliedColumn = '#AppliedColumn';
    const InterviewingColumn = '#InterviewingColumn';


    beforeEach( function() {
        homePageSteps.openHomePage();
        homePageSteps.clearFilerInputFields();
        homePageSteps.clickClearButton();
    })

    //Boundary values cases should be created on unit tests level

    //Search by full name or with space doesn't work
    it.skip(`Candidate should be filtered by fullname`, function () {
        //Arrange
             
        //Act
        homePageSteps.inputTextToNameField(searchName);
        homePageSteps.clickSubmitButton();
    
        //Assert
        homePageAssert.assertExpectedColumnContainsExpectedMember(AppliedColumn, searchName);
        homePageAssert.assertPageContainsExpectedCandidatesCount(1);
        homePageAssert.assertExpectedColumnContainsExpectedElementsNumber(AppliedColumn, 1);   
    })

    it(`Candidate should be filtered by part of the name`, function () {
        //Arrange
             
        //Act
        homePageSteps.inputTextToNameField(searchName.split(' ')[0]);
        homePageSteps.clickSubmitButton();
    
        //Assert
        homePageAssert.assertExpectedColumnContainsExpectedMember(AppliedColumn, searchName);
        homePageAssert.assertPageContainsExpectedCandidatesCount(1);
        homePageAssert.assertExpectedColumnContainsExpectedElementsNumber(AppliedColumn, 1);   
    })

    it(`Filetered candidate should stay in the same column`, function () {
        //Arrange
             
        //Act
        homePageSteps.clickMoveNextStateButtonFor(searchName);
        homePageSteps.inputTextToNameField(searchName.split(' ')[0]);
        homePageSteps.clickSubmitButton();
    
        //Assert
        homePageAssert.assertExpectedColumnContainsExpectedMember(InterviewingColumn, searchName);
        homePageAssert.assertPageContainsExpectedCandidatesCount(1);
        homePageAssert.assertExpectedColumnContainsExpectedElementsNumber(InterviewingColumn, 1);   
    })

    it(`Candidate should be filtered by the city`, function () {
        //Arrange
         
        //Act
        homePageSteps.inputTextToCityField(searchCity);
        homePageSteps.clickSubmitButton();
    
        //Assert
        homePageAssert.assertExpectedColumnContainsExpectedMember(AppliedColumn, searchCity);
        homePageAssert.assertPageContainsExpectedCandidatesCount(1);
        homePageAssert.assertExpectedColumnContainsExpectedElementsNumber(AppliedColumn, 1);      
    })

    it(`Result should not be found if we use city name as search criteria for the name field`, function () {
        //Arrange
               
        //Act
        homePageSteps.inputTextToCityField(searchName);
        homePageSteps.clickSubmitButton();
    
        //Assert
        homePageAssert.assertPageContainsExpectedCandidatesCount(0);
        homePageAssert.assertExpectedColumnContainsExpectedElementsNumber(AppliedColumn, 0);      
    })

    it(`Result should not be found if use city name as search criteria of name field`, function () {
        //Arrange
               
        //Act
        homePageSteps.inputTextToNameField(searchCity);
        homePageSteps.clickSubmitButton();
    
        //Assert
        homePageAssert.assertPageContainsExpectedCandidatesCount(0);
        homePageAssert.assertExpectedColumnContainsExpectedElementsNumber(AppliedColumn, 0);      
    })

    it(`Filtered results should be cleared if we press Clear button`, function () {
        //Arrange
         
        //Act
        homePageSteps.inputTextToCityField(searchCity);
        homePageSteps.clickSubmitButton();
        homePageSteps.clickClearButton();
    
        //Assert
        homePageAssert.assertPageContainsExpectedCandidatesCount(5);
        //I think filter search fields should also be cleaned up      
    }) 
})

