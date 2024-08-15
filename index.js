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


app.get("/",(req,res)=>{
    res.send("Hello from backend Karma , This Project is single handedly Done by Karma boiii")
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Backend is running on port ${port}`)
})

