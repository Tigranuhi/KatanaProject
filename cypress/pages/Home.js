export class Home {
    validateHomePage() {
        cy.get('#salesTab').should('have.attr', 'aria-selected', 'true');
        return this;
    }

    validateTheUser(userName, userSurname) {
        cy.xpath(`//p[text()='${userName + ' ' + userSurname}']`).should('exist');
        return this;
    }

    navigateToAddCustomer() {
        cy.get('#globalAdd').click();
        cy.get('#add-customer')
            .should('have.text', 'Customer')
            .click();
        return this;
    }

    navigateToAddSalesOrder() {
        cy.get('#globalAdd').click();
        cy.get('#add-sales')
            .should('have.text', 'Sales order')
            .click();

        return this;
    }
}