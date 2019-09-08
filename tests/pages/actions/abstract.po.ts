import BaseAction from "../../common/baseAction";
import AbstractPageUI from "../interfaces/abstract.ui";
import { format } from "util";
import { dropDown, goto } from "taiko";
import { expect } from "chai";


export default class AbstractPage extends BaseAction {
  constructor() {
    super();
  }

  async verifyToBeEqual(actual, expected): Promise<void> {
    console.log("\nVerify actual: \"" + actual + "\" equal to expected: \"" + expected + "\"");
    expect(actual).to.equal(expected);
  }

  async verifyToBeTrue(condition: boolean): Promise<void>  {
    expect(condition).to.be.true;
  }

  async goToUrl(url: string): Promise<void> {
    console.log("\nGo to: " + url);
    await goto(url);

  }

}
