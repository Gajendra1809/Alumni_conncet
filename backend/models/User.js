const mongoose=require('mongoose');
const { Schema }=mongoose;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
     }
    ,
    phone:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    yop:{
        type:String,
        required:true
    },
    linkedin:{
        type:String,
        required:true
    },
    instagram:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },   
    img:{
        type:String,
        //required:true
    },
    resume:{
        data: Buffer,
        contentType: String
    }
});

module.exports=mongoose.model('user',UserSchema);