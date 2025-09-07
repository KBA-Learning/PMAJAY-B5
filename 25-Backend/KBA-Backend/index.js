import express,{json} from 'express';
import dotenv from 'dotenv';
import {router} from './Routes/userRoute.js';

dotenv.config()

const app = express();

app.use(json())
app.use('/',router)


app.get('/',(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
})



app.post("/getData",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
})



app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port  ${process.env.PORT}`)
})