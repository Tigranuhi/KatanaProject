import {Customer} from "../objects/Customer";
import {Address} from "../objects/Customer";

export class NewCustomer{
    validateNewCustomerPage(){
        cy.xpath(`//span[text()='Customer']`).should('exist'); 
        return this;
    }

    addNewCustomer(customer = new Customer()){
        cy.get('input[name="firstName"]')
        .should('exist')
        .type(customer.firstName);

        cy.get('input[name="lastName"]')
        .should('exist')
        .type(customer.lastName);

        cy.get('input[name="email"]')
        .should('exist')
        .type(customer.email);

        cy.get('input[name="defaultBillingAddress"]')
        .should('exist')
        .click();

        //addNewAddress(customer.bilingAddress);
        var address = new Address();
        address = customer.bilingAddress;
       /* cy.get('input[name="firstName"]')
        .should('exist')
        .type(address.firstName);

        cy.get('input[name="lastName"]')
        .should('exist')
        .type(address.lastName);*/

        cy.get('input[name="line1"]')
        .should('exist')
        .type(address.addressLine1);

        cy.contains('Address line 1')
        .click(); //to close the dropdown

     /*   cy.get('input[name="city"]')
        .should('exist')
        .type(address.city);

        cy.contains('Address line 1')
        .click(); //to close the dropdown

        cy.get('input[name="state"]')
        .should('exist')
        .type(address.state, {force: true});

        cy.get('input[name="zip"]')
        .should('exist')
        .type(address.zip);

        cy.get('input[name="country"]')
        .should('exist')
        .type(address.country);*/

        cy.get('#submitButton')
        .should('not.be.disabled')
        .click();

        cy.get('button[class="MuiButtonBase-root MuiIconButton-root print-hide"]')
        .click();
    }

    addNewAddress(address){
        
    }
}