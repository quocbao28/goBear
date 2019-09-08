import { Step, BeforeSuite } from "gauge-ts";
import { openBrowser, goto, $ } from "taiko";
import { expect } from "chai";
import DemoPage from '../pages/actions/demo.po';
import Constants from "../common/constants";
const demoPage: DemoPage = new DemoPage();


export default class LoginStepDefinition {

    @Step("Go to Dashboard page")
    public async goToDashboard() {
        await demoPage.goToUrl(Constants.STAGING_URL);
    }

    @Step("Go to Travel section")
    public async goToTravelSection() {
        await demoPage.clickInsuranceTab();
        await demoPage.clickTravelTab();
    }


    @Step("Go to the Travel results page")
    public async clickShowMyResultsButton() {
        await demoPage.clickShowMyResultButtonTab()
    }

    @Step("Verify at least 3 cards are being displayed")
    public async verifyMoreThan3CardsDisplayed() {
        expect(await demoPage.verifyMoreTan3Result()).to.true;
    }
}
