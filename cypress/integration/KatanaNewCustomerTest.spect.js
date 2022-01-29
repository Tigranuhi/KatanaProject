import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NewCustomer } from "../pages/NewCustomer";
import { Customer } from "../objects/Customer";
import { Address } from "../objects/Customer";
import { SalesOrder } from "../pages/SalesOrder";

const login = new Login();
const home = new Home();
const newCustomer = new NewCustomer();
const salesOrder = new SalesOrder();

const customer = new Customer();

describe('Add New Customer', () => {
    it('navigate to login page and log in', () => {
        login.navidate();
        login.login(Cypress.env('user_email'), Cypress.env('user_password'));
    })
    it('should open home page and correct user credentials should shown ', () => {
        home.validateHomePage;
        home.validateTheUser(Cypress.env('user_name'), Cypress.env('user_lastname')); // check of login 
    })
    it('should add new Customer', () => {
        home.navigateToAddCustomer();
        newCustomer.validateNewCustomerPage();
        newCustomer.addNewCustomer();
    })
    it('should add new Sales Order', () => {
        home.navigateToAddSalesOrder();
        salesOrder.validateNewSalesOrderPage();
        salesOrder.addNewSalesOrder(customer);
    })
    it('should edit customer address on Sales Order', () => {
        salesOrder.navigateToSalesOrder(customer);
        var address = new Address('New address line 1');
        salesOrder.editCustomerAddress(address);
        salesOrder.verifyAddressOnScreen(address);
    })

})