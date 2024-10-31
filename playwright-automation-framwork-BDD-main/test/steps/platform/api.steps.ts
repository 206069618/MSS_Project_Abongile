import { Given, Then } from '@cucumber/cucumber';
import { request } from '@playwright/test';
import { expect } from '@playwright/test';

let response: any;
let apiRequestContext: any;

Given('I send a GET request to {string}', async function (url: string) {
    // Create a new APIRequestContext
    apiRequestContext = await request.newContext();

    // Use the base URL where your API is running
    const baseUrl = 'http://localhost:3000';
    response = await apiRequestContext.get(`${baseUrl}${url}`);
});

Then('the response status should be {int}', function (statusCode: number) {
    expect(response.status()).toBe(statusCode);
});

Then('the response body should contain {string}', async function (message: string) {
    const body = await response.json(); // Parse the JSON response
    expect(body).toEqual(expect.objectContaining({ id: 1, message: "Welcome to MMS." }));
});
