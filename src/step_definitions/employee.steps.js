console.log("Step definitions loaded");
import {Given, Then} from '@cucumber/cucumber';
import axios from 'axios';
const { expect } = await import('chai');

//let response;
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
Given('I send a GET request to {string}', async(endpoint) => {
    await delay(1000);
    try {
        this.response = await axios.get(`https://reqres.in${endpoint}`);
        console.log('Response successfully set:', this.response); // Log to verify response
    } catch (error) {
        this.response = error.response;
        console.log('Error response set:', this.response); // Log error response
    }
})

Then('the response status code should be {int}', (statusCode) => {
    expect(this.response.status).to.equal(statusCode)
})

Then('the response should contain a list of employees', () => {
    expect(this.response.data).to.have.property('data').that.is.an('array');
})