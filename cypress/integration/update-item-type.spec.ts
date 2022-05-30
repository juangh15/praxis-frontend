/*
    Given that there is an item added
    When the user clicks on PEN button
    And the user changes the item type
    Then the type name is updated in list view
    And The type amount is updated on INSIGHTS view
*/
/* eslint-disable cypress/no-unnecessary-waiting */
import {
  ItemsPage,
} from "../page/items.page.ts";

describe("Updating Item", () => {
  // Arrange

  let itemsPage: ItemsPage;
  let expectedItemName: string;
  let expectedItemSellIn: string;
  let expectedItemQuality: string;
  let expectedItemType: string;
  let expectedNewItemType: string;
  let previousInsightNormalAmount: number;
  let previousInsightAgedAmount: number;

  before(() => {
    expectedItemName = "TEST_ITEM_0001";
    expectedItemSellIn = "30";
    expectedItemQuality = "20";
    expectedItemType = "NORMAL";
    expectedNewItemType = "AGED";
    itemsPage = new ItemsPage();
    itemsPage.visitItemsPage();

    // Getting previous insights value
    itemsPage.clickOnInsightsButton();
    cy.wait(500);
    cy.get(itemsPage.getInsightsNormalValue()).then(($btn) => {
      previousInsightNormalAmount = parseInt($btn.text(), 10);
    });

    cy.get(itemsPage.getInsightsAgedValue()).then(($btn) => {
      previousInsightAgedAmount = parseInt($btn.text(), 10);
    });
    itemsPage.clickOnGoBackInsightsButton();
    cy.wait(500);
  });

  // Actions

  it("Given that there is an item added", () => {
    itemsPage.clickOnAddItemMenu();
    itemsPage.fillOutItemName(expectedItemName);
    itemsPage.fillOutItemSellIn(expectedItemSellIn);
    itemsPage.fillOutItemQuality(expectedItemQuality);
    itemsPage.openItemTypeSelector();
    itemsPage.selectItemTypeOption(expectedItemType);
    itemsPage.clickOnAddItem();
    cy.wait(500);
  });

  it("When the user clicks on PEN button", () => {
    itemsPage.clickOnPenButtonOfItem(
      expectedItemName,
      expectedItemSellIn,
      expectedItemQuality,
      expectedItemType,
    );
  });

  it("And the user changes the item type", () => {
    itemsPage.openItemTypeSelector();
    cy.wait(100);
    itemsPage.selectItemTypeOption(expectedNewItemType);
    itemsPage.clickOnUpdateItem();
    cy.wait(500);
  });

  // Asserts   TODO

  it("Then the type name is updated in list view", () => {
    itemsPage.checkIfItemExists(
      expectedItemName,
      expectedItemSellIn,
      expectedItemQuality,
      expectedNewItemType,
    );
  });

  it("And The type amount is updated on INSIGHTS view", () => {
    itemsPage.clickOnInsightsButton();
    itemsPage.checkInsightsNormalValue(previousInsightNormalAmount);
    itemsPage.checkInsightsAgedValue(previousInsightAgedAmount + 1);
  });

  after(() => {
    itemsPage.clickOnGoBackInsightsButton();
    // cy.wait(500);
    itemsPage.clickOnCanButtonOfItem(
      expectedItemName,
      expectedItemSellIn,
      expectedItemQuality,
      expectedNewItemType,
    );
    cy.wait(500);
    itemsPage.clickOnDeleteButton();
    // cy.wait(1000);
  });
});
