import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sample from '../Models/sample.js'

const router = Router();

router.get('/hi',(req,res)=>{
    console.log("HI World");
    res.send("Hi World")
})

router.post('/signup',async(req,res)=>{
    
    try{
    const {FirstName,LastName,UserName,Password,UserRole}= req.body
    console.log(FirstName);
    try{
    const newPassword =await bcrypt.hash(Password,10)
    console.log(newPassword);
    const result = await sample.findOne({userName:UserName})
    if(result){
        res.status(400).json({msg:'Username already exist'})
    }
    else{
        const newUser = new sample({
            firstName: FirstName,
            lastName: LastName,
            userName: UserName,
            password: newPassword,
            userRole: UserRole
          });
          await newUser.save();
    res.status(201).json({msg:'Successfullly created'});
    }}
    catch{
        res.status(404).json({msg:"Something went wrong on bcrypt"})
    }
    }
    catch{
        res.status(500).send(error)
    }
})

router.post('/login',async(req,res)=>{
 try{
    const {UserName,Password} = req.body
    const result = await sample.findOne({userName:UserName})
    if(!result){
        res.status(404).json({msg:'UserName not registered'})
    }
    const valid =await bcrypt.compare(Password,result.password)
    console.log(valid);

    if(valid){
       const token = jwt.sign({UserName,UserRole:result.userRole},process.env.SECRET_KEY,{expiresIn:'1h'})
       console.log(token);
       if(token){
        res.cookie('authToken',token,{
            httpOnly:true
        })
        res.status(200).json({msg:'Succesfully loggedin'})
       }
       else{
        res.status(400).json({msg:'Something wrong in token generation'})
       }
    }
}catch{
    res.status(500).json({msg:'Something went wrong'})
}
 
})

export  {router};