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

<<<<<<< HEAD
app.get("/indexChecking",(req,res)=>{
    res.send("test route worked")
=======
app.use("/api/auth", require("./routes/auth"))

//WP EASY QUESTIONS
app.post("/question",async (req,res)=>{
    try {
        let Question = await question.create(req.body)
        res.send(Question)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
>>>>>>> fcf26f90db82ca5d8fdcb02288e79c0f7b553f83
})


app.get("/",(req,res)=>{
    res.send("Hello from backend Karma , This Project is single handedly Done by Karma boii")
})

app.listen(5000,()=>{
    console.log("Backend is running on port 5000")
})

