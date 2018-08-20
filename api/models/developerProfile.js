var mongoose=require('mongoose');

var DeveloperSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    contactNo:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    projects:{
        type:Array,
        required:false
    },
    linkedinProfile:{
        type:String,
    },
    gitHub:{
        type:String,
    },
    address:{
        houseNo:{
            type:String
        },
        street:{
            type:String,
        },
        locality:{
            type:String,
        },
        city:{
            type:String
        },
        pincode:{
            type:String
        },
        country:{
            type:String
        },
    },
    sessionId:{
        type:String,
        required:true,
        unique: true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Developer=module.exports=mongoose.model('Developer',DeveloperSchema);

module.exports.addDetails=function(developer,callback){
    Developer.create(developer,callback);
};

module.exports.getDetails=function(callback,limit){
    Developer.find(callback).limit(limit);
};

module.exports.getDetailsById=function(id,callback){
    Developer.findById(id,callback);
};

module.exports.getDetailsBySessionId=function(sessionId,callback){
    var query = {sessionId: sessionId};
    Developer.findOne(query,callback);
};

module.exports.updateDetails=function(sessionId,developer,options,callback){
    var query={sessionId: sessionId};
    console.log(developer);
    var update={
        firstName:developer.firstName,
        middleName:developer.middleName,
        lastName:developer.lastName,
        contactNo:developer.contactNo,
        gender:developer.gender,
        email:developer.email,
        projects:developer.projects,
        linkedinProfile:developer.linkedinProfile,
        gitHub:developer.gitHub,
        address:{
            houseNo:developer.address.houseNo,
            street:developer.address.street,
            locality:developer.address.locality,
            city:developer.address.city,
            pincode:developer.address.pincode,
            country:developer.address.country
        }
    };
    Developer.findOneAndUpdate(query,update,options,callback);
};