import mongoose from "mongoose";
const { Schema }=mongoose;
const JobSchema=new Schema({
    position:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
     }
    ,
    description:{
        type:String,
        required:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
    
});

const Job=mongoose.model('jobs',JobSchema);
export default Job;