import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";

const app = express()
//middelver
app.use(cors({
    origin: process.env.CORS_ORIGIN, // FrontEnd Data Link 
}))
app.use(express.json({ limit: "16kb" })) //form data limit 
app.use(express.urlencoded({ extended: true, limit: "16kb" })) //url data hendal
app.use(express.static("public"))
app.use(cookieparser())
export { app }