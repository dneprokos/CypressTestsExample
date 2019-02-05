Feature: Filter Candidates

   As SomeUser I want to filter candidates by few fields

    Background:
        Given User opens Home Page
        And User clears input fields
        And User clears previous filters

    @ignore('BugOrFeature))')
    Scenario: Filter by fullname
        When User inputs "danielle moore" to the name field
        And User clicks Submit button
        Then "Applied" column contains "danielle moore" candidate
        And Assert total page candidates count equals to 1
        And Assert "Applied" column contains candidates count equals 1
    
    @focus
    Scenario: Filter by part of the name
        When User inputs "danielle" to the name field
        And User clicks Submit button
        Then "Applied" column contains "danielle moore" candidate
        And Assert total page candidates count equals to 1
        And Assert "Applied" column contains candidates count equals 1
    
    @focus
    Scenario: Filtering is case sensitive
        When User inputs "DANIELLE" to the name field
        And User clicks Submit button
        Then "Applied" column does not contain "emma stewart" candidate

    @focus
    Scenario: Filtered candidate should stay in the same column
        Given User clicks next button of candidate "danielle moore"
        When User inputs "danielle" to the name field
        And User clicks Submit button
        Then "Interviewing" column contains "danielle moore" candidate

    @focus
    Scenario: Filter by the city
        When User inputs "worcester" to the city field
        And User clicks Submit button
        Then "Applied" column contains "emma stewart" candidate
        And Assert total page candidates count equals to 1
        And Assert "Applied" column contains candidates count equals 1

    @focus
    Scenario: Filter by the city in the name field
        When User inputs "worcester" to the name field
        And User clicks Submit button
        Then "Applied" column does not contain "emma stewart" candidate
        And Assert total page candidates count equals to 0
        And Assert "Applied" column contains candidates count equals 0
    
    @focus
    Scenario: Press Clear button
        When User inputs "danielle" to the name field
        And User clicks Submit button
        And User clicks Clear button
        Then Assert total page candidates count equals to 5

        

