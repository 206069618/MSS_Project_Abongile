@welcome
Feature: Welcome message
  @Test_01
  Scenario: Display welcome message
    Given I open the application
    When I enter my name as "John Doe"
    And I click on submit
    Then I should see a welcome message
  @Test_02
  Scenario: Get welcome message
    Given I send a GET request to "/welcome"
    Then the response status should be 200
    And the response body should contain "Welcome"
  @Test_03
  Scenario Outline: Successfully //www.metalmanagementsolutions.com/
    Given I navigate to "https://www.metalmanagementsolutions.com/"
    When I click on "Contact"
    And I enter the first name "<firstName>"
    And I enter the last name "<lastName>"
    And I enter the phone number "<phone>"
    And I enter the job title "<jobTitle>"
    And I enter the subject "<subject>"
    And I leave a message "<message>"

    Examples:
      | firstName | lastName | email                 | phone       | jobTitle        | subject                    | message                                   | technologies |
      | John      | Doe      | johndoe@example.com   | 1234567890  | Quality Engineer | Inquiry about WIRE services | I would like to learn more about your services. | Mining       |

