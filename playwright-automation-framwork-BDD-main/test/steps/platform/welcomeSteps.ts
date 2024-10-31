import {Given, Then, When} from "@cucumber/cucumber";
import { baseInstance } from "../../helpers/BaseClass";
import WelcomPage from "../../pages/platform/welcomPage";



const welcomPage: WelcomPage = new WelcomPage(baseInstance);

Given('I open the application', async function () {
	await  welcomPage.openApplicationUrl();
});
When('I enter my name as {string}', async function (string) {
	await  welcomPage.enterName();
});

When('I click on submit', async function () {
	await welcomPage.clickSubmit();
});

Then('I should see a welcome message', async function () {
	await welcomPage.validateWelcomeMessage()
	;
});




