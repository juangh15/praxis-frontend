class ItemsPage {

    private indexItemsPageURL: string
    private menuAddItemButton: string;
    private itemNameField: string;
    private itemSellInField: string;
    private itemQualityField: string;
    private itemTypeSelector: string;
    private itemTypeNormalOption: string;
    private addItemButton: string;

    constructor() {
        this.indexItemsPageURL = 'http://localhost:4200/list'
        this.menuAddItemButton = '.list-add-button';
        this.itemNameField = '#mat-input-0';
        this.itemSellInField = '#mat-input-1';
        this.itemQualityField = '#mat-input-2';
        this.itemTypeSelector = '#mat-select-0';
        this.itemTypeNormalOption = '#mat-option-1';
        this.addItemButton = "[data-automation=\"item-form-confirm-button\"]";
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

    public clickOnAddItem(): void {
        cy.get(this.addItemButton).click()
    }
}
  
export {ItemsPage}