import { Router } from "express";
import { Course } from "./adminRoute.js";
import { authenticate } from "../Middleware/auth.js";

const user = Router();

user.get('/getCourse',authenticate,async(req,res)=>{
    
    try{
    const key = req.query.courseName;
    const result = await Course.findOne({courseName:key});
    
    
    if(result){
        res.status(200).json({result})
    }
    else{
        res.status(404).json({msg:"Course not found"})
    }
}
    catch{
        res.status(400).json({msg:'Something gone wrong on getting or fetching data'})
    }
})

user.get('/getCourse/:courseName',authenticate,async (req,res)=>{
    console.log(req.params.courseName);
    try{
    
        const key = req.params.courseName;
        const result = await Course.findOne({courseName:key});
       
        if(result){
            res.status(200).json({result})
        }
        else{
            res.status(404).json({msg:"Course not found"})
        }
        }
        catch{
            res.status(500).json({msg:"Internal Server error"})
        }
})



export default user;