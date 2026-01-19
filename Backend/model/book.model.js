import mongoose from "mongoose";

//Schema
const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String

})

//Store this data Book Document/collection in mongodb
const Book=mongoose.model("Book",bookSchema)

export default Book