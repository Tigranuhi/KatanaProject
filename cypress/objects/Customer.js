export class Customer{
    constructor(firstName = 'Jhon', lastName = 'Smith', email = 'jhon@smith.com', bilingAddress = new Address(), shippingAddress = new Address()){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.bilingAddress = bilingAddress;
        this.shippingAddress = shippingAddress;
    }
}

export class Address{
    constructor(firstName = 'Jhon', lastName = 'Smith', addressLine1 = '2523 Harron Drive', city = 'Baltimore', state = 'Maryland', zipCode = '21202', country = 'United States'){
        this.firstName = firstName;
        this.lastName = lastName;
        this.addressLine1 = addressLine1;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }

}