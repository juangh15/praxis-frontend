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
    expectedItemName = "TEST_0001_DEL";
    expectedItemSellIn = "30";
    expectedItemQuality = "20";
    expectedItemType = "NORMAL";
    expectedItemName2 = "TEST_0002_DEL";
    expectedItemSellIn2 = "40";
    expectedItemQuality2 = "25";
    expectedItemType2 = "NORMAL";
    itemsPage = new ItemsPage();
    itemsPage.visitItemsPage();

    // Getting previous insights value
    itemsPage.clickOnInsightsButton();
    cy.wait(1000);
    cy.get(itemsPage.getInsightsNormalValue()).then(($btn) => {
      previousInsightNormalAmount = parseInt($btn.text(), 10);
      cy.wait(500);
    });
    cy.wait(500);
    itemsPage.clickOnGoBackInsightsButton();
  });

  // Actions

  it("Given that there are more than one item added", () => {
    // item1
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
    // item2
    itemsPage.clickOnAddItemMenu();
    // cy.wait(1000);
    itemsPage.fillOutItemName(expectedItemName2);
    itemsPage.fillOutItemSellIn(expectedItemSellIn2);
    itemsPage.fillOutItemQuality(expectedItemQuality2);
    itemsPage.openItemTypeSelector();
    // cy.wait(1000);
    itemsPage.selectItemTypeOption(expectedItemType2);
    itemsPage.clickOnAddItem();
    cy.wait(2000);
  });

  it("When the user clicks on CAN button", () => {
    itemsPage.clickOnCanButtonOfItem(
      expectedItemName2,
      expectedItemSellIn2,
      expectedItemQuality2,
      expectedItemType2,
    );
    cy.wait(1000);
  });

  it("And the user confirms the delete action", () => {
    // cy.wait(1000);
    itemsPage.clickOnDeleteButton();
  });

  // Asserts

  it("And The insight information is updated", () => {
    cy.wait(1000);
    itemsPage.clickOnInsightsButton();
    // cy.wait(1000);
    itemsPage.checkInsightsNormalValue(previousInsightNormalAmount + 1);
    itemsPage.clickOnGoBackInsightsButton();
  });

  after(() => {
    cy.wait(1000);
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
