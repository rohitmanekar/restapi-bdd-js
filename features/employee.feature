Feature: Employee API tests

Scenario: Get list of employees
Given I send a GET request to "/api/v1/employees"
Then the response status code should be 200
And the response should contain a list of employees

