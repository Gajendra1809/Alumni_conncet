const mongoose=require('mongoose');
const { Schema }=mongoose;
const JobSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
     }
    ,
    skills:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
});

module.exports=mongoose.model('jobs',JobSchema);