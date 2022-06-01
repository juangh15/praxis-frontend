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
    expectedItemName = "TEST_0001_UP";
    expectedItemSellIn = "30";
    expectedItemQuality = "20";
    expectedItemType = "NORMAL";
    expectedNewItemType = "AGED";
    itemsPage = new ItemsPage();
    itemsPage.visitItemsPage();

    // Getting previous insights value
    itemsPage.clickOnInsightsButton();
    cy.wait(1000);
    cy.get(itemsPage.getInsightsNormalValue()).then(($btn) => {
      previousInsightNormalAmount = parseInt($btn.text(), 10);
      cy.wait(500);
    });

    cy.get(itemsPage.getInsightsAgedValue()).then(($btn) => {
      previousInsightAgedAmount = parseInt($btn.text(), 10);
      cy.wait(500);
    });
    cy.wait(500);
    itemsPage.clickOnGoBackInsightsButton();
    // cy.wait(1000);
  });

  // Actions

  it("Given that there is an item added", () => {
    cy.wait(1000);
    itemsPage.clickOnAddItemMenu();
    // cy.wait(1000);
    itemsPage.fillOutItemName(expectedItemName);
    itemsPage.fillOutItemSellIn(expectedItemSellIn);
    itemsPage.fillOutItemQuality(expectedItemQuality);
    itemsPage.openItemTypeSelector();
    // cy.wait(1000);
    itemsPage.selectItemTypeOption(expectedItemType);
    itemsPage.clickOnAddItem();
    cy.wait(2000);
  });

  it("When the user clicks on PEN button", () => {
    // cy.wait(1000);
    itemsPage.clickOnPenButtonOfItem(
      expectedItemName,
      expectedItemSellIn,
      expectedItemQuality,
      expectedItemType,
    );
    cy.wait(1000);
  });

  it("And the user changes the item type", () => {
    // cy.wait(1000);
    itemsPage.openItemTypeSelector();
    // cy.wait(1000);
    itemsPage.selectItemTypeOption(expectedNewItemType);
    itemsPage.clickOnUpdateItem();
    cy.wait(1000);
  });

  // Asserts   TODO

  it("Then the type name is updated in list view", () => {
    // cy.wait(1000);
    itemsPage.checkIfItemExists(
      expectedItemName,
      expectedItemSellIn,
      expectedItemQuality,
      expectedNewItemType,
    );
  });

  it("And The type amount is updated on INSIGHTS view", () => {
    cy.wait(1000);
    itemsPage.clickOnInsightsButton();
    // cy.wait(1000);
    itemsPage.checkInsightsNormalValue(previousInsightNormalAmount);
    itemsPage.checkInsightsAgedValue(previousInsightAgedAmount + 1);
    itemsPage.clickOnGoBackInsightsButton();
  });

  after(() => {
    cy.wait(1000);
    itemsPage.clickOnCanButtonOfItem(
      expectedItemName,
      expectedItemSellIn,
      expectedItemQuality,
      expectedNewItemType,
    );
    cy.wait(500);
    itemsPage.clickOnDeleteButton();
    cy.wait(2000);
  });
});
