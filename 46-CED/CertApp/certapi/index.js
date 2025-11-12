import express,{json} from 'express'
import routes from './routes/adminRoute.js';

const app = express()

app.use(json())
app.use('/',routes)


app.listen(8000,()=>{
    console.log('Server connected to 8000');
    
})