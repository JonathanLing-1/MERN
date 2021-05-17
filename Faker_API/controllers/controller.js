const faker = require('faker');

class User {
    constructor() {
        this.name = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
    }

}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = faker.address.cityName();

    }
}

module.exports = {
    // C
    // R
    getUser: (req,res) => {
        res.json( new User())
    },
    getCompany: (req,res) =>{
        res.json( new Company())
    },
    getBoth: (req, res) =>{
        res.json(new User(),new Company())
    }
    // U
    // D
}