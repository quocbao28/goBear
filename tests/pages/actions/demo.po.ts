import AbstractPage from "./abstract.po";
import DemoPageUI from "../interfaces/demo.ui";
import Constants from "../../common/constants";
import { goto } from "taiko";
import { expect } from "chai";

export default class LoginPage extends AbstractPage {
  constructor() {
    super();
  }
  async clickInsuranceTab(): Promise<void> {
    await this.clickElement(DemoPageUI.INSURANCE_TAB);
  }

  async clickTravelTab(): Promise<void> {
    await this.clickElement(DemoPageUI.TRAVEL_TAB);
  }

  async clickShowMyResultButtonTab(): Promise<void> {
    await this.clickElement(DemoPageUI.SHOWMYRESULTS_BUTTON);
  }

  async verifyMoreTan3Result(): Promise<boolean> {
   return await this.isElementDisplayed(DemoPageUI.GOTOPROVIDER_BUTTON);
  }
}
