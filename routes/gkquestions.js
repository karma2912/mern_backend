const express = require('express')
const router = express.Router()
const gkquestion = require('../models/gk/gkquestions')
const gkMquestion = require("../models/gk/gkMquestions"); 
const gkHquestion = require("../models/gk/gkHquestions"); 
const gkEasy = require("../models/gk/gkEasy")
const gkHard = require("../models/gk/gkHard")
const gkModerate = require("../models/gk/gkModerate")
//gk EASY QUESTIONS
router.post("/gkquestion",async (req,res)=>{
   try {
       let Question = await gkquestion.insertMany(gkEasy)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getgkEquestion",async (req,res)=>{
   try {
       let Question = await gkquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

//gk MODERATE QUESTIONS
router.post("/gkMquestion",async (req,res)=>{
   try {
       let Question = await gkMquestion.insertMany(gkModerate)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getgkMquestion",async (req,res)=>{
   try {
       let Question = await gkMquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

//gk Hard QUESTIONS
router.post("/gkHquestion",async (req,res)=>{
   try {
       let Question = await gkHquestion.insertMany(gkHard)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getgkHquestion",async (req,res)=>{
   try {
       let Question = await gkHquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})
 module.exports = router