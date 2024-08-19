require('dotenv').config()
const express = require("express")
const connectToMongo = require("./db.js")
var cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
connectToMongo();

const authRoutes = require('./routes/auth.js')
const wpRoutes = require('./routes/questions.js')
const seRoutes = require('./routes/sequestions.js')
const dbRoutes = require('./routes/dbquestions.js')
app.use("/auth",authRoutes)
app.use("/api",wpRoutes)
app.use("/api",seRoutes)
app.use("/api",dbRoutes)


app.get("/",(req,res)=>{
    res.send("Hello from backend Karma , This Project is single handedly Done by Karma boiiiii")
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Backend is running on port ${port}`)
})

