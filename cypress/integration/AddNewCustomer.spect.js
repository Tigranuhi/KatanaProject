import { Home } from "../pages/Home";
import {Login} from "../pages/Login";
import {NewCustomer} from "../pages/NewCustomer";
import {Customer} from "../objects/Customer";
import {Address} from "../objects/Customer";

const login = new Login();
const home = new Home();
const newCustomer = new NewCustomer();

describe('Add New Customer', ()=>{
    it('navigate to login page and log in',  ()=>{
        login.navidate();
        login.login("email", 'password') //should be set up accurate user info from properti files
    })
    it('should open home page and correct user credentials should shown ', ()=>{
        home.validateHomePage;
        home.validateTheUser("Tigranuhi", "Mkhitar");
    })
    it('should navigate to New Customer page', () =>{
        home.navigateToAddCustomer();
        newCustomer.validateNewCustomerPage();
        
        //var address = new Address();
        //var billingAddress = new Address();
        //const customer  = new Customer();
        newCustomer.addNewCustomer();
    })
})