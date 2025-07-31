import { Router } from "express";

const router = Router();

router.get('/hi',(req,res)=>{
    console.log("HI World");
    res.send("Hi World")
})

router.post('/signup',(req,res)=>{
    
    // const details = req.body
    // console.log(details.FirstName);
    try{
    const {FirstName,LastName,UserName,Password,UserRole}= req.body
    console.log(FirstName);

    

    }
    catch{
        res.send(error)
    }
})

export  {router};