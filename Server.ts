import express from "express"
const app =express()
const dotenv = require('dotenv');
import cors from 'cors'
import mainRouter from "./Real-Time-Code-Editor/Routers/MainRouter";
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true,
}));


app.use('/api/v1',mainRouter.router)

const Port =process.env.PORT
app.listen(Port,()=>{
    console.log("Application started on port :",Port)
})