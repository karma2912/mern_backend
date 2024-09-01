const express = require('express')
const router = express.Router()
const dbquestion = require('../models/db/dbquestions')
const dbMquestion = require("../models/db/dbMquestions"); 
const dbHquestion = require("../models/db/dbHquestions"); 
const dbEasy = require("../models/db/dbEasy")
const dbHard = require("../models/db/dbHard")
const dbModerate = require("../models/db/dbModerate")
//db EASY QUESTIONS
router.post("/dbquestion",async (req,res)=>{
   try {
       let Question = await dbquestion.insertMany(dbEasy)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getdbEquestion",async (req,res)=>{
   try {
       let Question = await dbquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

//db MODERATE QUESTIONS
router.post("/dbMquestion",async (req,res)=>{
   try {
       let Question = await dbMquestion.insertMany(dbModerate)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getdbMquestion",async (req,res)=>{
   try {
       let Question = await dbMquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

//db Hard QUESTIONS
router.post("/dbHquestion",async (req,res)=>{
   try {
       let Question = await dbHquestion.insertMany(dbHard)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getdbHquestion",async (req,res)=>{
   try {
       let Question = await dbHquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})
 module.exports = router