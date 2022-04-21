/*
    Given that there are more than one item added
    When the user clicks on CAN button
    And the user confirms the delete action
    Then the Items is not displayed on list view
    And The insight information is updated
*/
import {
  ItemsPage,
} from "../page/items.page.ts";

describe("Deleting Item", () => {
  // Arrange

  let itemsPage: ItemsPage;
  let expectedItemName: string;
  let expectedItemSellIn: string;
  let expectedItemQuality: string;
  let expectedItemName2: string;
  let expectedItemSellIn2: string;
  let expectedItemQuality2: string;

  before(() => {
    expectedItemName = "Chocorramo";
    expectedItemSellIn = "30";
    expectedItemQuality = "20";
    expectedItemName2 = "Choclitos";
    expectedItemSellIn2 = "40";
    expectedItemQuality2 = "25";
    itemsPage = new ItemsPage();
    itemsPage.visitItemsPage();
  });

  // Actions

  it("Given that there are more than one item added", () => {
    //item1
    itemsPage.clickOnAddItemMenu();
    itemsPage.fillOutItemName(expectedItemName);
    itemsPage.fillOutItemSellIn(expectedItemSellIn);
    itemsPage.fillOutItemQuality(expectedItemQuality);
    itemsPage.openItemTypeSelector();
    itemsPage.selectItemNormalOption();
    itemsPage.clickOnAddItem();
    //item2
    itemsPage.clickOnAddItemMenu();
    itemsPage.fillOutItemName(expectedItemName2);
    itemsPage.fillOutItemSellIn(expectedItemSellIn2);
    itemsPage.fillOutItemQuality(expectedItemQuality2);
    itemsPage.openItemTypeSelector();
    itemsPage.selectItemNormalOption();
    itemsPage.clickOnAddItem();
  });

  it("When the user clicks on CAN button", () => {
    itemsPage.clickOnCanButton();
  });

  it("And the user confirms the delete action", () => {
    itemsPage.clickOnDeleteButton();
  });
  // Asserts   TODO

  it("And The insight information is updated", () => {
    itemsPage.clickOnInsightsButton();
    cy.get("[data-automation=\"item-type-normal-value\"]").should("have.text", " 1 ");
  });
});
