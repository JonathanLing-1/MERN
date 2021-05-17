const { company } = require("faker")
const { getCompany, getBoth, getUser } = require("../controllers/controller")

module.exports = app => {
    // C
    // R
    app.get('/api/users/new', getUser);
    app.get('/api/companies/new', getCompany);
    app.get('/api/user/company', getBoth);
    // U
    // D
}