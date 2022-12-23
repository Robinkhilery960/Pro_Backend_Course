import express from "express"
import { getForm } from "../controllers/getForm.js"
import { Home } from "../controllers/home.js"
import { postForm } from "../controllers/postForm.js"

const router=express.Router()

router.get("/",Home)
router.get("/getform",getForm)
router.get("/postform",postForm)
router.get("/myget",(req,res)=>{
    console.log("request object",req)
    console.log(req.body)
    console.log(req.query)
    res.send(req.body)
})
router.post("/mypost", (req,res)=>{
    console.log(req.files)
    console.log(req.body)
    res.send(req.body)
})

export default router