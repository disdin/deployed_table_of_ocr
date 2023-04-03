import mongoose from "mongoose";

const Connection= async(url)=>{
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(url);
        console.log("DB connected");
    }
    catch(err){
        console.log("Error: ", err.message);
    }
}
export default Connection;