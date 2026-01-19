import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'


import cors from 'cors'
const app=express()
app.use(express.json())

app.use(cors())

dotenv.config()

const PORT=process.env.PORT || 4000

const URL=process.env.MongoDBURL

//connect to mongodb
try{

    mongoose.connect(URL)
    .then(()=>{
        console.log("Connected to mongodb")

    })
    .catch((error)=>{
        console.error(error)
    })
    


}
catch(error){
    console.log('error',error)

}

//defining routes
app.use('/book',bookRoute)
app.use('/user',userRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})