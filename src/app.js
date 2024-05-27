import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";

const app = express()
//middelver
app.use(cors({
    origin: process.env.CORS_ORIGIN, // FrontEnd Data Link  
    credentials:true
}))
app.use(express.json({ limit: "16kb" })) // Acept json formet form data limit 
app.use(express.urlencoded({ extended: true, limit: "16kb" })) //url data hendal Link 
app.use(express.static("public")) //pdf video img stor
app.use(cookieparser()) //Browger Cookie
export { app }