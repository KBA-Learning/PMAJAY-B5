import express,{json} from 'express';
import dotenv from 'dotenv';
import {router} from './Routes/loginRoute.js';
import {admin} from './Routes/adminRoute.js'
import { authenticate } from './Middleware/auth.js';
import admincheck from './Middleware/admin.js';
import user from './Routes/userRoute.js';
import mongoose from 'mongoose';

dotenv.config()

const app = express();

app.use(json())
app.use('/',router)
app.use('/',user)
app.use('/',authenticate,admincheck,admin)


app.get('/',(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
})



app.post("/getData",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
})

mongoose.connect("mongodb://localhost:27017/KBA-COURSE").then(() => {
    console.log(" MongoDB connected successfully to KBA-COURSE");})
    .catch((error) => {
        console.error(" MongoDB connection failed:", error);})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port  ${process.env.PORT}`)
})