export class Login {
    navidate() {
        cy.visit(Cypress.env('login_url'));
    }

    login(userEmail, password) {
        cy.get('#1-email')
            .type(userEmail)
            .should('have.value', userEmail);

        cy.get('input[name="password"]')
            .type(password)
            .should('have.value', password);

        cy.get('button[name="submit"]')
            .should('have.text', 'Sign in')
            .click();

        return this;
    }

    validateInvalidCredentials(expectedText) { // WRONG EMAIL OR PASSWORD.
        cy.xpath(`//span[text()='${expectedText}']`).should('exist');
        return this;
    }

    validateLoginPage() {
        cy.xpath("//h3[text()='Sign in']").should('exist');
        return this;
    }
}