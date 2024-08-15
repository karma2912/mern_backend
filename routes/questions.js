const express = require('express')
const router = express.Router()
const question = require('../models/wp/Questions')
const wpMquestion = require("../models/wp/WpMquestions"); 
const wpHquestion = require("../models/wp/WpHquestions"); 

console.log(question)
//WP EASY QUESTIONS
router.post("/question",async (req,res)=>{
   try {
       let Question = await question.create(req.body)
       res.send(Question)
   } catch (error) {
       console.log(error.message)
       res.status(500).json({message:error.message})
   }
})

router.get("/getquestion",async (req,res)=>{
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
       let Question = await wpMquestion.create(req.body)
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
       let Question = await wpHquestion.create(req.body)
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