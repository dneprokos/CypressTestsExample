Feature: Move candidates to state

   As someUser I want to move candidates from one state to another

   Background:
        Given User opens Home Page
        And User clears input fields
        And User clears previous filters
    
    @focus
    Scenario: Move candidate from the Applied to Interviewing state
        When User clicks next button of candidate "danielle moore"
        Then "Interviewing" column contains "danielle moore" candidate
        And Assert "Interviewing" column contains candidates count equals 1

    @focus
    Scenario: Move candidate from the Interviewing to Hired state
        Given User clicks next button of candidate "danielle moore"
        When User clicks next button of candidate "danielle moore"
        Then "Hired" column contains "danielle moore" candidate
        And Assert "Hired" column contains candidates count equals 2

    @focus
    Scenario: Move candidate from the Hired to Interviewing state
        When User clicks back button of candidate "julia cunningham"
        Then "Interviewing" column contains "julia cunningham" candidate
        And Assert "Interviewing" column contains candidates count equals 1
    
    @focus
    Scenario: Moved candidates were sorted in expected order
        When User clicks next button of candidate "lloyd gonzalez" 
        And User clicks next button of candidate "danielle moore" 
        Then Candidates of "Interviewing" should be sorted in the following order "lloyd gonzalez" and "danielle moore" 