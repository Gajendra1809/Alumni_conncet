import mongoose from "mongoose";
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

const Job=mongoose.model('jobs',JobSchema);
export default Job;