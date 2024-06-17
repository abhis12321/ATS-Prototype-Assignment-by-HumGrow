import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "User-name is missing!"],
    },
    email: {
        type:String,
        required:[true , "Email-id is missing!"],
        unique: [true , "This email is already registered, you can login with!"]
    },
    password:{
        type:String,
        required:[true , 'Please enter a password for your profile'],
    },
    gender:{
        type:String,
        required:[true , "Your gender is missing"],
        enum: {
            values:[
                "male",
                "female",
                "others"
            ],
            message:"Please select a correct gender from -> {male , female , others}",
        }
    },
    resume:{
        type:String,
        required:[true , "Resume-link is missing!"],
    },
    contactNo:{
        type:Number,
        required:[true , "Contact-number is missing!"],
    },
    course:{
        type:String,
    },
});

export default mongoose.models.Users || mongoose.model("Users" , userSchema);