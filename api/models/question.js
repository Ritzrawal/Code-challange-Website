var mongoose=require('mongoose');

var QuestionSchema=mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    stdin:{
        type:String,
        required:true
    },
    stdout:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Question=module.exports=mongoose.model('Question',QuestionSchema);

module.exports.getQuestions=function(callback,limit){
    Question.find(callback).limit(limit);
};

module.exports.addQuestion=function(question,callback){
    Question.create(question,callback);
};

module.exports.getQuestionById=function(id,callback){
    Question.findById(id,callback);
};

module.exports.deleteQuestion=function(id,callback){
    var query={id:id};
    Question.findByIdAndRemove(id,callback);
};