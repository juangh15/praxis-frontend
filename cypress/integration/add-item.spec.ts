/*
    Scenario 1: Adding Items
    Given the user has clicked on ADD (+) button
    When the user fills out all required information
    And the user clicks on ADD button
    Then The items is displayed on list view
    And The information set is displayed according to added in creation step.
*/
/* eslint-disable cypress/no-unnecessary-waiting */
import {
  ItemsPage,
} from "../page/items.page.ts";

describe("Adding Items", () => {
  // Arrange

  let itemsPage: ItemsPage;
  let expectedItemName: string;
  let expectedItemSellIn: string;
  let expectedItemQuality: string;
  let expectedItemType: string;

  before(() => {
    expectedItemName = "TEST_0001_ADD";
    expectedItemSellIn = "30";
    expectedItemQuality = "20";
    expectedItemType = "NORMAL";
    itemsPage = new ItemsPage();
    itemsPage.visitItemsPage();
  });

  // Actions

  it("Given the user has clicked on ADD (+) button", () => {
    itemsPage.clickOnAddItemMenu();
  });

  it("When the user fills out all required information", () => {
    itemsPage.fillOutItemName(expectedItemName);
    itemsPage.fillOutItemSellIn(expectedItemSellIn);
    itemsPage.fillOutItemQuality(expectedItemQuality);
    itemsPage.openItemTypeSelector();
    // cy.wait(1000);
    itemsPage.selectItemTypeOption(expectedItemType);
  });

  it("And the user clicks on ADD button", () => {
    itemsPage.clickOnAddItem();
  });

  // Asserts

  it("Then The items is displayed on list view", () => {
    // cy.wait(1000);
    itemsPage.checkAtLeastOneItemExist();
  });

  it("And The information set is displayed according to added in creation step", () => {
    itemsPage.checkIfItemExists(
      expectedItemName,
      expectedItemSellIn,
      expectedItemQuality,
      expectedItemType,
    );
  });

  after(() => {
    itemsPage.clickOnCanButtonOfItem(
      expectedItemName,
      expectedItemSellIn,
      expectedItemQuality,
      expectedItemType,
    );
    cy.wait(500);
    itemsPage.clickOnDeleteButton();
    cy.wait(2000);
  });
});
