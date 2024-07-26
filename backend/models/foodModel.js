import mongoose from "mongoose";

//BUILDING FOOD SCHEMA
const foodSchema = new mongoose.Schema({
    name:{type:String , required:true},
    description: {type:String , required:true},
    price: {type:Number , required:true},
    image: {type:String,required:true},
    category: {type:String,required:true}
})

//BUILDING FOOD MODEL/COLLECTION
const foodModel = mongoose.models.food || mongoose.model("food" , foodSchema)

export default foodModel