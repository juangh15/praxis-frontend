class ItemsPage {

    private indexItemsPageURL: string
    private menuAddItemButton: string;
    private itemNameField: string;
    private itemSellInField: string;
    private itemQualityField: string;
    private itemTypeSelector: string;
    private itemTypeNormalOption: string;
    private itemTypeAgedOption: string;
    private addItemButton: string;
    private updateItemButton: string;
    private canButton: string;
    private deleteButton: string;
    private editButton: string;
    private insightsButton: string;
    private goBackInsightsButton: string;


    constructor() {
        this.indexItemsPageURL = 'http://localhost:4200/list'
        this.menuAddItemButton = '.list-add-button';
        this.itemNameField = '[formcontrolname="name"]';
        this.itemSellInField = '[formcontrolname="sellIn"]';
        this.itemQualityField = '[formcontrolname="quality"]';
        this.itemTypeSelector = '[formcontrolname="type"]';
        this.itemTypeNormalOption = '[ng-reflect-value="NORMAL"]';
        this.itemTypeAgedOption = '[ng-reflect-value="AGED"]';
        this.addItemButton = "[data-automation=\"item-form-confirm-button\"]";
        this.updateItemButton = "[data-automation=\"item-form-confirm-button\"]";
        this.canButton = ".list-container > div:nth-child(3) .list-col:last-child mat-icon:nth-child(2)";
        this.deleteButton = "[data-automation=\"delete-dialog-confirm-button\"]"
        this.editButton = '[data-automation="list-edit-button"]';
        this.insightsButton = "button.list-insights-button";
        this.goBackInsightsButton = "data-automation=\"insights-go-back-button\"";
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

}

export {ItemsPage}
