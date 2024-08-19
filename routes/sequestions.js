const express = require('express')
const router = express.Router()
const sequestion = require('../models/se/sequestions')
const seMquestion = require("../models/se/seMquestions"); 
const seHquestion = require("../models/se/seHquestions"); 
const questions = require("../models/se/seEasy.js")
const Mquestions = require("../models/se/seModerate.js")
const Hquestions = require("../models/se/seHard.js")

//WP EASY QUESTIONS
router.post("/sequestion",async (req,res)=>{
   try {
    
       let Question = await sequestion.insertMany(questions)
       console.log('questions inserted',questions)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getsequestion",async (req,res)=>{
   try {
       let Question = await sequestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

//WP MODERATE QUESTIONS
router.post("/seMquestion",async (req,res)=>{
   try {
    let Question = await seMquestion.insertMany(Mquestions)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getseMquestion",async (req,res)=>{
   try {
       let Question = await seMquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

//WP Hard QUESTIONS
router.post("/seHquestion",async (req,res)=>{
   try {
       let Question = await seHquestion.insertMany(Hquestions)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getseHquestion",async (req,res)=>{
   try {
       let Question = await seHquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})
 module.exports = router