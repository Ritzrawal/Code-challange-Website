var mongoose=require('mongoose');
var SubmissionSchema=mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    code:{
            type:String,
            required:true
    },
    score:{
        type:Number,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});


var Submission=module.exports=mongoose.model('Submission',SubmissionSchema);

module.exports.addSubmission=function(submission,callback){
    Submission.create(submission,callback);
};
module.exports.getSubmission=function(callback,limit){
    Submission.find(callback).limit(limit);
};
module.exports.getSubmissionById=function(id,callback){
    Submission.findById(id,callback);
};