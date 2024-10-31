import { BaseClass } from "../../helpers/BaseClass";
import { elements } from "../../xpath/platform/MssPageElements";

export default class MssPage {
	baseInstance: BaseClass;

	constructor(baseInstance: BaseClass) {
		this.baseInstance = baseInstance;
	}

	async openApplicationUrl() {
        await this.baseInstance.openURL(process.env.MMS_PROD_URL);
		await this.baseInstance.takeScreenshot();
	}
	async clickContact() {
		await this.baseInstance.clickElement(elements.contactMnu,"Click contact");
		await this.baseInstance.takeScreenshot();
	}


	async enterFirstName(firstName) {
		await this.baseInstance.enterText(elements.FirstNametxt, firstName, "First name to enter");
		await this.baseInstance.takeScreenshot();
	}

	async enterLastName(lastName) {
		await this.baseInstance.enterText(elements.LastNametxt, lastName, "Last name to enter");
		await this.baseInstance.takeScreenshot();
	}

	async enterPhone(phone) {
		await this.baseInstance.enterText(elements.Phonetxt, phone, "Phone number to enter");
		await this.baseInstance.takeScreenshot();
	}

	async enterJobTitle(jobTitle) {
		await this.baseInstance.enterText(elements.JobTitletxt, jobTitle, "Job title to enter");
		await this.baseInstance.takeScreenshot();
	}

	async enterSubject(subject) {
		await this.baseInstance.enterText(elements.Subjecttxt, subject, "Subject to enter");
		await this.baseInstance.takeScreenshot();
	}

	async leaveMessage(message) {
		await this.baseInstance.enterText(elements.Messagetxt, message, "Message to enter");
		await this.baseInstance.takeScreenshot();
	}
	async clickTechnoclogy() {
		await this.baseInstance.hoverOverElement(elements.TechnologyMenu);
		await this.baseInstance.takeScreenshot();
		await this.baseInstance.clickElement(elements.MiningXpath,"click mining")


	}

}