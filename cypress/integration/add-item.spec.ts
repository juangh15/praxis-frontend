/*
    Scenario 1: Adding Items
    Given the user has clicked on ADD (+) button
    When the user fills out all required information
    And the user clicks on ADD button
    Then The items is displayed on list view
    And The information set is displayed according to added in creation step.
*/
import {
  ItemsPage,
} from "../page/items.page.ts";

describe("Adding Items", () => {
  // Arrange

  let itemsPage: ItemsPage;
  let expectedItemName: string;
  let expectedItemSellIn: string;
  let expectedItemQuality: string;

  before(() => {
    expectedItemName = "Chocorramo";
    expectedItemSellIn = "30";
    expectedItemQuality = "20";
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
    itemsPage.selectItemNormalOption();
  });

  it("And the user clicks on ADD button", () => {
    itemsPage.clickOnAddItem();
  });

  // Asserts   TODO

  it("Then The items is displayed on list view", () => {
    cy.get("[data-automation=\"list-insights-button\"]").should("have.text", " Insights ");
  });

  it("And The information set is displayed according to added in creation step", () => {
    cy.get('[data-automation="list-item-row"]').last().find('div').should(($lista)=>{
      expect($lista.eq(0), 'first item').to.contain('Chocorramo')
      expect($lista.eq(1), 'second item').to.contain('30')
      expect($lista.eq(2), 'third item').to.contain('20')
      expect($lista.eq(3), 'fourth item').to.contain('NORMAL')

    })
  });
});
