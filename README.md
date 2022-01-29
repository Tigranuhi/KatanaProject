# KatanaProject
Possible bugs: (I didn't purposely scann the website for bugs, this is just what I've noticed while working on the prokect)

1. I am able to add as an address anythinig, there is no validationi on the address (e.g. I was able to add 'new address test' as a address line 1, without any other info)
2. I think possibly for the address city, county and zip code should be required, I was able to submit address without them
3. I can have any number of user with completly the same data as I want. 
4. If I go to add new customer page and start fill first the address, then after I click save on the add address form, address won't be added to the new customer page. 

NOTE: to run the tests please change user credentials in cypress.env.json file to a valid values. 

Test cases

LoginTest.spect.js contains followinig tests

Test 1: Verify invalid credentials
Steps: 
1. Navigiate to Kata login page
2. Enter invalid credentials (e.g. fake@email.com and fakepassword)
3. Click log in
4. Verify that "Wrong email or password." message is shown

Test2: Veriify valid credentials 
1. Navigiate to Kata login page
2. Enter valid credentials 
3. Click log in
4. Verify that login is performed sucessfully 

KatanaNewCustomer.spect.js contains following tests
Test 1: Login and verify the information 
1. Navigate to Log in page
2. Enter your credentials 
3. Click Log in button

Test 2: Verifications of home page and user 
1. After getting to a home page verify that it is loaded
2. Verify that user credentials are presented in the home page

Test 3. Add new cutomer
1. Navigate to 'Add new customer'
2. Verify that 'Add new customer' page is loaded
3. Fill the form for creating a new customer
4. Fill the address form for the customer
5. Submit new address
6. Verify that address on the new customer form is accurate
6. Set shipping address the same as billing address
7. Submit the new user

Test 4. Add new Sales Order
1. Navigate to 'Add sales order'
2. Verify Sales order screen is loaded
3. Fill the form for a new Sales 
4. As a customer for a sales order select a customer created in the Test 3
5. Verify that the address on a new sales order is accurate
6. Submit New Sales order

Test 5. Edit customer address on the Sale Order
1. Navigate to a sale order
2. Open the sale order created in Test4
3. Click on a address textfield (address form will be opened)
4. Edit the address line 1, enter new address
5. Submit new address
6. Verify that address changed on a screen




