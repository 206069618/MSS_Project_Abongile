@api
Feature: API Tests

Scenario: Get welcome message
    Given I send a GET request to "/welcome"
    Then the response status should be 200
    And the response body should contain "Welcome"
