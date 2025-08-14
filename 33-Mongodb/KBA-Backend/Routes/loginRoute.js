import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sample from '../Models/sample.js'

const router = Router();
//const user = new Map();

router.get('/hi',(req,res)=>{
    console.log("HI World");
    res.send("Hi World")
})

router.post('/signup',async(req,res)=>{
    
    // const details = req.body
    // console.log(details.FirstName);
    try{
    const {FirstName,LastName,UserName,Password,UserRole}= req.body
    console.log(FirstName);
    try{
        const newPassword =await bcrypt.hash(Password,10)
        console.log(newPassword);
    const result = await sample.findOne({userName:UserName})
    console.log(result);
    
    if(result){
        res.status(400).json({msg:'Username already exist'})
    }
    else{
        
       //user.set(UserName,{FirstName,LastName,newPassword,UserRole})
    const newUser = new sample({
        firstName: FirstName,
        lastName: LastName,
        userName: UserName,
        password: newPassword,
        userRole: UserRole
      });
       // Save user to MongoDB
       console.log(newUser)
      await newUser.save();
      console.log(newUser)
    res.status(201).send("Signed-up successfully")

    //res.status(201).json({msg:'Successfullly created'});
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
    //const result = user.get(UserName)
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