import {Login} from "../pages/Login";
const login = new Login();

describe('Login Page', ()=>{
    beforeEach('navigate to login page',  ()=>{
        login.navidate();
    })
    it('should not be able to login to using invalid credentials', ()=>{
        login.validateLoginPage();
        login.login('fake@email.com', 'fakepassword');
        login.validateInvalidCredentials('Wrong email or password.');
    })
    it('should be able to login to using valid credentials', ()=>{
        login.login("email", 'password') //should be set up accurate user info from properti files
        cy.contains("Tigranuhi Mkhitar"); // should do better check of login
    })
})