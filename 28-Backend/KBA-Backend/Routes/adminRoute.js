import { Router } from "express";
import { authenticate } from "../Middleware/auth.js";
import admincheck from "../Middleware/admin.js";

const admin = Router();
const course = new Map()

admin.post('/addCourse',(req,res)=>{
 try{
    const {CourseName,CourseId,CourseType,Description,Price}= req.body;
    if(course.get(CourseName)){
        res.status(400).json({msg:'Course already exist'})
    }
    else{
    try{
    course.set(CourseName,{CourseId,CourseType,Description,Price});
    res.status(201).json({msg:'Course successfully entered'})
    }

    catch{
        res.status(400).json({msg:'Something went wrong while setting data'})
    }
}
}
  catch{
    res.status(500).json({msg:'Something went wrong'})
  }

})

admin.put('/updateCourse',(req,res)=>{

})

export {admin,course};