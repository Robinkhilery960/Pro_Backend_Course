 import express from "express"  
 import router from './Router/routes.js'
 import fileUpload from "express-fileupload"

const app=express()     
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/' 
}))
app.use(express.json())
app.use(express.urlencoded({extended:false})) 
app.use(router)
app.set("view engine","ejs")
 
app.listen(4000,()=>{
    console.log("server is listening at port 4000")
})

export default app