import express from "express"
const app =express()
const dotenv = require('dotenv');
import cors from 'cors'
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true,
}));
