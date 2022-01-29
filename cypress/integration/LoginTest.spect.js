import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
const login = new Login();
const home = new Home();

describe('Login Page', () => {
    beforeEach('navigate to login page', () => {
        login.navidate();
    })
    it('should not be able to login to using invalid credentials', () => {
        login.validateLoginPage();
        login.login('fake@email.com', 'fakepassword');
        login.validateInvalidCredentials('Wrong email or password.');
    })
    it('should be able to login to using valid credentials', () => {
        login.login(Cypress.env('user_email'), Cypress.env('user_password'));
        home.validateTheUser(Cypress.env('user_name'), Cypress.env('user_lastname')); // check of login 
    })
})