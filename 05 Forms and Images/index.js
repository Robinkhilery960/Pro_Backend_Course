import * as dotenv from 'dotenv'
import express from "express"  
 import router from './Router/routes.js'
 import fileUpload from "express-fileupload"
 import { v2 as cloudinary } from 'cloudinary'
dotenv.config()
const app=express()     


cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME ,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  }); 



app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/' 
}))
app.use(express.json())
app.use(express.urlencoded({extended:false})) 
app.use(router)
app.set("view engine","ejs") 





app.listen(process.env.PORT,()=>{
    console.log(`server is listening at ${process.env.PORT}`) 
})

export default app