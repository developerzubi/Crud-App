import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/UserRoute.js';

const app = express();
app.use(bodyParser.json());
app.use(cors())
dotenv.config();


const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("DB connected successfull")
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}).catch(e=>console.log(e))

app.use("/api",route)
app.use("/",route)