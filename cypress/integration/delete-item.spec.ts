/*
    Given that there are more than one item added
    When the user clicks on CAN button
    And the user confirms the delete action
    Then the Items is not displayed on list view
    And The insight information is updated
*/
/* eslint-disable cypress/no-unnecessary-waiting */
import {
  ItemsPage,
} from "../page/items.page.ts";

describe("Deleting Item", () => {
  // Arrange

  let itemsPage: ItemsPage;
  let expectedItemName: string;
  let expectedItemSellIn: string;
  let expectedItemQuality: string;
  let expectedItemType: string;
  let expectedItemName2: string;
  let expectedItemSellIn2: string;
  let expectedItemQuality2: string;
  let expectedItemType2: string;
  let previousInsightNormalAmount: number;

  before(() => {
    expectedItemName = "TEST_ITEM_0001";
    expectedItemSellIn = "30";
    expectedItemQuality = "20";
    expectedItemType = "NORMAL";
    expectedItemName2 = "TEST_ITEM_0002";
    expectedItemSellIn2 = "40";
    expectedItemQuality2 = "25";
    expectedItemType2 = "NORMAL";
    itemsPage = new ItemsPage();
    itemsPage.visitItemsPage();

    // Getting previous insights value
    itemsPage.clickOnInsightsButton();
    cy.wait(500);
    cy.get(itemsPage.getInsightsNormalValue()).then(($btn) => {
      previousInsightNormalAmount = parseInt($btn.text(), 10);
    });
    itemsPage.clickOnGoBackInsightsButton();
    cy.wait(500);
  });

  // Actions

  it("Given that there are more than one item added", () => {
    // item1
    itemsPage.clickOnAddItemMenu();
    itemsPage.fillOutItemName(expectedItemName);
    itemsPage.fillOutItemSellIn(expectedItemSellIn);
    itemsPage.fillOutItemQuality(expectedItemQuality);
    itemsPage.openItemTypeSelector();
    itemsPage.selectItemTypeOption(expectedItemType);
    itemsPage.clickOnAddItem();
    // item2
    itemsPage.clickOnAddItemMenu();
    itemsPage.fillOutItemName(expectedItemName2);
    itemsPage.fillOutItemSellIn(expectedItemSellIn2);
    itemsPage.fillOutItemQuality(expectedItemQuality2);
    itemsPage.openItemTypeSelector();
    itemsPage.selectItemTypeOption(expectedItemType2);
    itemsPage.clickOnAddItem();
    cy.wait(500);
  });

  it("When the user clicks on CAN button", () => {
    itemsPage.clickOnCanButtonOfItem(
      expectedItemName2,
      expectedItemSellIn2,
      expectedItemQuality2,
      expectedItemType2,
    );
  });

  it("And the user confirms the delete action", () => {
    itemsPage.clickOnDeleteButton();
    cy.wait(500);
  });

  // Asserts

  it("And The insight information is updated", () => {
    itemsPage.clickOnInsightsButton();
    itemsPage.checkInsightsNormalValue(previousInsightNormalAmount + 1);
  });

  after(() => {
    itemsPage.clickOnGoBackInsightsButton();
    // cy.wait(500);
    itemsPage.clickOnCanButtonOfItem(
      expectedItemName,
      expectedItemSellIn,
      expectedItemQuality,
      expectedItemType,
    );
    cy.wait(500);
    itemsPage.clickOnDeleteButton();
  });
});
