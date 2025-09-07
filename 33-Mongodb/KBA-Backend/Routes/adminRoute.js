import { Router } from "express";
import { authenticate } from "../Middleware/auth.js";
import admincheck from "../Middleware/admin.js";
import {Course} from "../Models/sample.js"
import upload from "../Middleware/upload.js"
const admin = Router();
const convertToBase64 = (buffer) => {
  return buffer.toString("base64");
};
admin.post('/addCourse',upload.single("courseImage"),async (req,res)=>{
 try{
    const {CourseName,CourseId,CourseType,Description,Price}= req.body;
    if(await Course.findOne({courseName:CourseName})){
        res.status(400).json({msg:'Course already exist'})
    }
    else{
      
    try{
      let imageBase64 = null;
      if (req.file) {
        // Convert the image buffer to Base64 string
        imageBase64 = convertToBase64(req.file.buffer);
    }
      const newCourse = new Course({
        courseName: CourseName,
        courseId: CourseId,
        courseType: CourseType,
        description: Description,
        price: Number(Price),
        image: imageBase64
    })
    await newCourse.save();
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

admin.put('/updateCourse',async (req,res)=>{
  try{
    const {CourseName,CourseId,CourseType,Description,Price}= req.body;
    const result=await Course.findOne({courseName:CourseName})
      if(result){
        result.courseId=CourseId;
        result.courseType=CourseType;
        result.description=Description;
        result.price=Price;
        console.log(result);
        await result.save();
        res.status(200).json({msg:"Course details updated succesfully"})
    }
    else{
      res.status(404).json({msg:"Course not found"})
    }
  }
  catch{
    res.status(500).json({msg:'Something gone wrong'})
  }
})

admin.patch('/updateCourse',async (req,res)=>{
try{
  const {CourseName,Price} = req.body;
  const result = await Course.findOne({courseName:CourseName});
  console.log(result);
  if(result){
    result.price=Price;
    await result.save();
    res.status(200).json({msg:"Course Updated"})
  }
  else{
    res.status(404).json({msg:"Course doesnt exist"})
  }
}
catch{
  res.status(500).json({msg:"Something went wrong"})
}
})

admin.delete('/deleteCourse',async (req,res)=>{
try{
  const {CourseName} = req.body;
  if(await Course.findOne({courseName:CourseName})){
    await Course.findOneAndDelete({courseName:CourseName})
    res.status(200).json({msg:'Course deleted succesfully'})
  }
  else{
    res.status(404).json({msg:'Course not found'})
  }
}
catch{
  res.status(500).json({msg:'Something went wrong'})
}
})

export {admin,Course};