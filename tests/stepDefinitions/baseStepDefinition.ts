import { Step, BeforeScenario, AfterScenario, BeforeStep } from "gauge-ts";
import { openBrowser, goto, closeBrowser } from "taiko";
import Constants from "../common/constants";
import AbstractPage from "../pages/actions/abstract.po";
const abstractPage: AbstractPage =  new AbstractPage();

export default class BaseStepDefinition {

    @BeforeScenario()
    public async specSetup() {
        await openBrowser({
            headless: false,
            args: ['--window-size=1368,768']
        });
        console.log("Setup needs to done before running the Scenario");
    }

    @AfterScenario()
    public async specCleanUp() {
        await closeBrowser();
    }

    @Step("Navigate to <url>")
    public async navigateToUrl(url: string) {
        await goto(url,{timeout:80000});
    }

}
