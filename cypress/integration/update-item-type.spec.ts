/*
    Given that there is an item added
    When the user clicks on PEN button
    And the user changes the item type
    Then the type name is updated in list view
    And The type amount is updated on INSIGHTS view
*/

import {
  ItemsPage,
} from "../page/items.page.ts";

describe("Updating Item", () => {
  // Arrange

  let itemsPage: ItemsPage;
  let expectedItemName: string;
  let expectedItemSellIn: string;
  let expectedItemQuality: string;

  before(() => {
    itemsPage = new ItemsPage();
    itemsPage.visitItemsPage();
  });

  // Actions

  it("Given that there is an item added", () => {
    itemsPage.clickOnAddItemMenu();
    itemsPage.fillOutItemName(expectedItemName);
    itemsPage.fillOutItemSellIn(expectedItemSellIn);
    itemsPage.fillOutItemQuality(expectedItemQuality);
    itemsPage.openItemTypeSelector();
    itemsPage.selectItemNormalOption();
    itemsPage.clickOnAddItem();
  });

  it("When the user clicks on PEN button", () => {
    itemsPage.clickOnEditButton();
  });

  it("And the user changes the item type", () => {
    itemsPage.openItemTypeSelector();
    itemsPage.selectItemAgedOption();
    itemsPage.clickOnUpdateItem();
  });

  // Asserts   TODO

  it("Then the type name is updated in list view", () => {
    cy.get(".list-container > div:nth-child(3) .list-col:nth-child(4)").should("have.text", " AGED ");
  });

  it("And The type amount is updated on INSIGHTS view", () => {
    itemsPage.clickOnInsightsButton();
    cy.get("[data-automation=\"item-type-normal-value\"]").should("have.text", " 0 ");
    cy.get("[data-automation=\"item-type-aged-value\"]").should("have.text", " 1 ");
  });
});
