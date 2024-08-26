const express = require('express')
const router = express.Router()
const question = require('../models/wp/wpEquestions')
const wpMquestion = require("../models/wp/wpMquestions"); 
const wpHquestion = require("../models/wp/wpHquestions"); 
const questions = require("../models/wp/wpEasy")
const Mquestions = require("../models/wp/wpModerate")
const Hquestions = require("../models/wp/wpHard")

//WP EASY QUESTIONS
router.post("/question",async (req,res)=>{
   try {
       let Question = await question.insertMany(questions)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getwpEquestion",async (req,res)=>{
   try {
       let Question = await question.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

//WP MODERATE QUESTIONS
router.post("/wpMquestion",async (req,res)=>{
   try {
       let Question = await wpMquestion.insertMany(Mquestions)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getwpMquestion",async (req,res)=>{
   try {
       let Question = await wpMquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

//WP Hard QUESTIONS
router.post("/wpHquestion",async (req,res)=>{
   try {
       let Question = await wpHquestion.insertMany(Hquestions)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getwpHquestion",async (req,res)=>{
   try {
       let Question = await wpHquestion.find({})
       res.send(Question)
       
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})
 module.exports = router