import { BaseClass } from "../../helpers/BaseClass";
import { elements } from "../../xpath/platform/WelcomePageElements";

export default class WelcomPage {
	baseInstance: BaseClass;

	constructor(baseInstance: BaseClass) {
		this.baseInstance = baseInstance;
	}

	async openApplicationUrl() {
        await this.baseInstance.openURL("http://localhost:4200/");
		await this.baseInstance.takeScreenshot();
	}


	async enterName() {
		await this.baseInstance.enterText(elements.nameInput,"Abongile", "Name to enter");
		await this.baseInstance.takeScreenshot();
	}

	async clickSubmit() {
		await this.baseInstance.clickElement(elements.submitButton,"click submit");
		await this.baseInstance.takeScreenshot();
	}
	async validateWelcomeMessage() {
		await this.baseInstance.waitForElement(elements.welcomeMessage)
		await this.baseInstance.takeScreenshot();
	}

}