Feature: Employee API tests

Scenario: Get list of employees
Given I send a GET request to "/api/users?page=2"
Then the response status code should be 201
And the response should contain a list of employees

