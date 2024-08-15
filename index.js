require('dotenv').config()
const express = require("express")
const connectToMongo = require("./db.js")
var cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
connectToMongo();

const authRoutes = require('./routes/auth.js')
const noteRoutes = require('./routes/questions.js')
app.use("/auth",authRoutes)
app.use("/api",noteRoutes)

app.get("/indexChecking",(req,res)=>{
    res.send("test route worked")
})


app.get("/",(req,res)=>{
    res.send("Hello from backend Karma , This Project is single handedly Done by Karma")
})

app.listen(5000,()=>{
    console.log("Backend is running on port 5000")
})

