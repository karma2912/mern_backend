const express = require('express')
const router = express.Router()
const amquestion = require('../models/am/amquestions')
const amMquestion = require('../models/am/amMquestions')
const amHquestion = require('../models/am/amHquestions')
const amEasy = require('../models/am/amEasy')
const amModerate = require('../models/am/amModerate')
const amHard = require('../models/am/amHard')

//am EASY QUESTIONS
router.post("/amquestion",async (req,res)=>{
   try {
       let Question = await amquestion.insertMany(amEasy)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getamEquestion",async (req,res)=>{
   try {
       let Question = await amquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

//am MODERATE QUESTIONS
router.post("/amMquestion",async (req,res)=>{
   try {
       let Question = await amMquestion.insertMany(amModerate)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getamMquestion",async (req,res)=>{
   try {
       let Question = await amMquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

//am Hard QUESTIONS
router.post("/amHquestion",async (req,res)=>{
   try {
       let Question = await amHquestion.insertMany(amHard)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getamHquestion",async (req,res)=>{
   try {
       let Question = await amHquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})
 module.exports = router