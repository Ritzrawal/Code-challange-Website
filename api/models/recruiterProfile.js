var mongoose = require('mongoose');

var RecruiterSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    companyRegistrationNo: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sessionId: {
        type: String,
        required: true
    },
    recruiterName: {
        type: String,
        required: true
    },
    companyWebsite: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Company = module.exports = mongoose.model('Recruiter', RecruiterSchema);

module.exports.getCompany = function (callback, limit) {
    Company.find(callback).limit(limit);
};

module.exports.getCompanyBySessionId = function (sessionId, callback) {
    var query = {sessionId: sessionId};
    Company.findOne(query, callback);
};

module.exports.addCompany = function (company, callback) {
    Company.create(company, callback);
};

module.exports.updateCompany = function (sessionId, company, options, callback) {
    var query = { sessionId: sessionId };
    console.log(company);
    var update = {
        companyName : company.companyName,
        companyRegistrationNo : company.companyRegistrationNum,
        contactNo: company.phone,
        email: company.email,
        recruiterName: company.recruiterName,
        companyWebsite: company.companyWebsite
    };
    console.log(update);
    Company.findOneAndUpdate(query, update, options, callback);
};