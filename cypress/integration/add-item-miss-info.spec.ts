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
    expectedItemName = "Chocorramo";
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

  // Asserts   TODO

  it("Then ADD button is Disabled", () => {
    cy.get("[data-automation=\"item-form-confirm-button\"]").should("be.disabled");
  });

  it("And \"Expected value between 0 and 80\" message is displayed on quality field", () => {
    cy.get("#mat-error-0").should("have.text", " Expected value between 0 and 80 ");
  });
});
