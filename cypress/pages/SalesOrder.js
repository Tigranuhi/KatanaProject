import { Customer } from "../objects/Customer";
import { Address } from "../objects/Customer";

export class SalesOrder {
    validateNewSalesOrderPage() {
        cy.xpath(`//span[text()='Sales order']`).should('exist');
        return this;
    }

    navigateToSalesOrder(customer) { // click on a name to navigate to that specific sales order
        cy.contains(customer.firstName + ' ' + customer.lastName)
            .should('exist')
            .click();
    }

    addNewSalesOrder(customer) {
        cy.get('input[placeholder="Search or create customer"]')
            .should('exist')
            .type(customer.firstName);

        cy.contains(customer.firstName + ' ' + customer.lastName) // find cutomer name in dropdown
            .should('exist')
            .click();

        cy.get('div[data-testid="address-field-location"]') //verify the address is the same as the created customer
            .should('exist')
            .and('have.text', customer.bilingAddress.addressLine1);

        cy.get('button[class="MuiButtonBase-root MuiIconButton-root print-hide"]') //close the window
            .click();
    }

    editCustomerAddress(newAddress) {
        //click on address textfield
        cy.get('div[data-testid="address-field-location"]')
            .should('exist')
            .click();

        cy.get('input[name="line1"]')
            .should('exist')
            .type(newAddress.addressLine1);

        cy.contains('Address line 1')
            .click(); //to close the dropdown

        cy.get('#submitButton')
            .should('not.be.disabled')
            .click();
    }

    verifyAddressOnScreen(address) {
        cy.get('div[data-testid="address-field-location"]') //verify the address 
            .should('exist')
            .and('have.text', address.addressLine1);
    }
}