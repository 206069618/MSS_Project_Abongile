import {Given, Then, When} from "@cucumber/cucumber";
import { baseInstance } from "../../helpers/BaseClass";
import mssPage from "../../pages/platform/MssPage";

const MssPage: mssPage = new mssPage(baseInstance);
Given('I navigate to {string}', async function (string) {
await MssPage.openApplicationUrl();
});
When('I click on {string}', async function (string) {
	await MssPage.clickContact();
});

When('I enter the first name {string}', async function(firstName) {
	await MssPage.enterFirstName(firstName);
});

When('I enter the last name {string}', async function(lastName) {
	await MssPage.enterLastName(lastName);
});

When('I enter the phone number {string}', async function(phone) {
	await MssPage.enterPhone(phone);
});

When('I enter the job title {string}', async function(jobTitle) {
	await MssPage.enterJobTitle(jobTitle);
});

When('I enter the subject {string}', async function(subject) {
	await MssPage.enterSubject(subject);
});

When('I leave a message {string}', async function(message) {
	await MssPage.leaveMessage(message);
});
When('I click on {string} and select {string}', async function (string, string2) {
	// Write code here that turns the phrase above into concrete actions
	await MssPage.clickTechnoclogy();
});




