import express from "express";
import { getForm } from "../controllers/getForm.js";
import { Home } from "../controllers/home.js";
import { postForm } from "../controllers/postForm.js";
import { v2 as cloudinary } from "cloudinary";
const router = express.Router();

router.get("/", Home);

router.get("/getform", getForm);

router.get("/postform", postForm);

router.get("/myget", (req, res) => {
  console.log("request object", req);
  console.log(req.body);
  console.log(req.query);
  res.send(req.body);
});

router.post("/mypost", async (req, res) => {
    let finalResult=[]
  for (let i = 0; i < req.files.samplefile.length; i++) {
    try { 
        const result = await cloudinary.uploader.upload(
        req.files.samplefile[i].tempFilePath,
        { folder: "users" }
      );
       
     finalResult.push(result)
    } catch (error) { 
      console.log(error); 
    }
  }
  res.status(200).json({
    success: true,
    message: "File uploaded successfully", 
    finalResult
  });
});

export default router;
