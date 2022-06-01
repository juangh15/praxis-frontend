class ItemsPage {

    private indexItemsPageURL: string
    private menuAddItemButton: string;
    private itemRow: string;
    private itemNameField: string;
    private itemSellInField: string;
    private itemQualityField: string;
    private itemTypeSelector: string;
    private itemTypeOption: string;
    private itemTypeNormalOption: string;
    private itemTypeAgedOption: string;
    private addItemButton: string;
    private updateItemButton: string;
    private canButton: string;
    private deleteButton: string;
    private qualityValueErrorText: string;
    private editButton: string;
    private insightsButton: string;
    private insightsNormalValue: string;
    private insightsAgedValue: string;
    private goBackInsightsButton: string;

    constructor() {
        this.indexItemsPageURL = 'http://3.233.167.141:4200'
        this.menuAddItemButton = '.list-add-button';
        this.itemRow = "[data-automation=\"list-item-row\"]";
        this.itemNameField = '[formcontrolname="name"]';
        this.itemSellInField = '[formcontrolname="sellIn"]';
        this.itemQualityField = '[formcontrolname="quality"]';
        this.itemTypeSelector = '[formcontrolname="type"]';
        this.itemTypeOption = '[role="option"]';
        this.itemTypeNormalOption = '[ng-reflect-value="NORMAL"]';
        this.itemTypeAgedOption = '[ng-reflect-value="AGED"]';
        this.addItemButton = "[data-automation=\"item-form-confirm-button\"]";
        this.updateItemButton = "[data-automation=\"item-form-confirm-button\"]";
        this.canButton = ".list-container > div:nth-child(3) .list-col:last-child mat-icon:nth-child(2)";
        this.deleteButton = "[data-automation=\"delete-dialog-confirm-button\"]";
        this.qualityValueErrorText = "#mat-error-0";
        this.editButton = '[data-automation="list-edit-button"]';
        this.insightsButton = "button.list-insights-button";
        this.insightsNormalValue = "[data-automation=\"item-type-normal-value\"]";
        this.insightsAgedValue = "[data-automation=\"item-type-aged-value\"]";
        this.goBackInsightsButton = "[data-automation=\"insights-go-back-button\"]";
    }

    public visitItemsPage(): void {
        cy.visit(this.indexItemsPageURL)
    }

    public clickOnAddItemMenu(): void {
        cy.get(this.menuAddItemButton).click()
    }

    public fillOutItemName(itemName: string): void {
        cy.get(this.itemNameField).type(itemName);
    }

    public fillOutItemSellIn(itemSellIn: string): void {
        cy.get(this.itemSellInField).type(itemSellIn);
    }

    public fillOutItemQuality(itemQuality: string): void {
        cy.get(this.itemQualityField).type(itemQuality);
    }

    public openItemTypeSelector(): void {
        cy.get(this.itemTypeSelector).click()
    }

    public selectItemTypeOption(type: string): void {
      cy.get(this.itemTypeOption).contains(type).click();
    }

    public selectItemNormalOption(): void {
        cy.get(this.itemTypeNormalOption).click()
    }

    public selectItemAgedOption(): void {
      cy.get(this.itemTypeAgedOption).click()
    }

    public clickOnAddItem(): void {
        cy.get(this.addItemButton).click()
    }

    public clickOnUpdateItem(): void {
      cy.get(this.updateItemButton).click()
    }

    public clickOnEditButton(): void {
      cy.get(this.editButton).click()
    }

    public clickOnCanButton(): void {
      cy.get(this.canButton).click()
    }

    public clickOnDeleteButton(): void {
      cy.get(this.deleteButton).click()
    }

    public clickOnInsightsButton(): void {
      cy.get(this.insightsButton).click()
    }

    public clickOnGoBackInsightsButton(): void {
      cy.get(this.goBackInsightsButton).click()
    }

    public getInsightsNormalValue(): string {
      return this.insightsNormalValue;
    }

    public getInsightsAgedValue(): string {
      return this.insightsAgedValue;
    }

    public checkAtLeastOneItemExist(): void {
      cy.get(this.itemRow).should("exist");
    }

    public checkAddItemButtonIsDisabled(): void {
      cy.get(this.addItemButton).should("be.disabled");
    }

    public checkErrorExpectedQualityValue(): void {
      cy.get(this.qualityValueErrorText).should("have.text", " Expected value between 0 and 80 ");
    }

    public checkInsightsNormalValue(expectedValue: number): void {
      cy.get(this.getInsightsNormalValue()).should(
        "have.text", "".concat(" ", expectedValue.toString(), " ")
      );
    }

    public checkInsightsAgedValue(expectedValue: number): void {
      cy.get(this.getInsightsAgedValue()).should(
        "have.text", "".concat(" ", expectedValue.toString(), " ")
      );
    }

    public checkIfItemExists(name: string, sellIn: string, quality: string, type: string): void {
      cy.get(this.itemRow)
      .contains(name)
      .parent()
      .within(() => {
        // All searches are automatically rooted to the specific item row
        cy.get('div').eq(0).should('contain', name)
        cy.get('div').eq(1).should('contain', sellIn)
        cy.get('div').eq(2).should('contain', quality)
        cy.get('div').eq(3).should('contain', type)
      })
    }

    public clickOnCanButtonOfItem(name: string, sellIn: string, quality: string, type: string): void {
      cy.get(this.itemRow)
      .contains(name)
      .parent()
      .within(() => {
        // All searches are automatically rooted to the specific item row
        //cy.get('div').eq(0).contains(name)
        //cy.get('div').eq(1).contains(sellIn)
        //cy.get('div').eq(2).contains(quality)
        //cy.get('div').eq(3).contains(type)
        cy.get('div').eq(4).children().eq(1).click()
      })
    }

    public clickOnPenButtonOfItem(name: string, sellIn: string, quality: string, type: string): void {
      cy.get(this.itemRow)
      .contains(name)
      .parent()
      .within(() => {
        // All searches are automatically rooted to the specific item row
        //cy.get('div').eq(0).contains(name)
        //cy.get('div').eq(1).contains(sellIn)
        //cy.get('div').eq(2).contains(quality)
        //cy.get('div').eq(3).contains(type)
        cy.get('div').eq(4).children().eq(0).click()
      })
    }

}

export {ItemsPage}
