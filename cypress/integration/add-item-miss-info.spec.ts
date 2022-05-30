/*
    Given the user has clicked on ADD (+) button
    When the user fills out the name
    And the user fills the quality with negative value
    Then ADD button is Disabled
    And "Expected value between 0 and 80" message is displayed on quality field
*/

import {
  ItemsPage,
} from "../page/items.page.ts";

describe("Adding Items", () => {
  // Arrange

  let itemsPage: ItemsPage;
  let expectedItemName: string;
  let expectedItemQuality: string;

  before(() => {
    expectedItemName = "TEST_ITEM_0001";
    expectedItemQuality = "-20";
    itemsPage = new ItemsPage();
    itemsPage.visitItemsPage();
  });

  // Actions

  it("Given the user has clicked on ADD (+) button", () => {
    itemsPage.clickOnAddItemMenu();
  });

  it("When the user fills out the name", () => {
    itemsPage.fillOutItemName(expectedItemName);
  });

  it("And the user fills the quality with negative value", () => {
    itemsPage.fillOutItemQuality(expectedItemQuality);
    cy.focused().blur();
  });

  // Asserts

  it("Then ADD button is Disabled", () => {
    itemsPage.checkAddItemButtonIsDisabled();
  });

  it("And \"Expected value between 0 and 80\" message is displayed on quality field", () => {
    itemsPage.checkErrorExpectedQualityValue();
  });
});
