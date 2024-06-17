import mongoose from "mongoose";
import dbConnect from "./dbConnect";

dbConnect();
const jobSchema = new mongoose.Schema({
    title: {
        type:String,
        required:[true , "Oops! Job title is missing"],
    },
    description: {
        type:String,
        required:[true , "oops! Job Description is missing"],
    },
    requiredSkills:{
        type:String,
    },
    stipend:{
        type:Number,
    },
    jobType:{
        type:String,
        required:[true , "Please select a job type"],
        enum:{
            values:["Work From Home" , "Work From Office" , "Hybrid"],
            message:"Please select a correct job type"
        }
    },
    location:{
        type:String,
    },
});


export default mongoose.models.Jobs || mongoose.model("jobs" , jobSchema);