console.log("Step definitions loaded");
import {Given, Then} from '@cucumber/cucumber';
import axios from 'axios';
const { expect } = await import('chai');

let response;
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
Given('I send a GET request to {string}', async(endpoint) => {
    await delay(1000);
    response = await axios.get(`https://dummy.restapiexample.com${endpoint}`);
})

Then('the response status code should be {int}', (statusCode) => {
    expect(response.status).to.equal(statusCode)
})

Then('the response should contain a list of employees', () => {
    expect(response.data.data).to.be.an('array');
})