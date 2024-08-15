const express = require('express')
const router = express.Router()
const Results = require("../models/wp/Results")
const fetchuser = require("../middleware/fetchuser")

router.get("/getresults" , fetchuser , async (req,res)=>{
    try {
       console.log(req.user.id)
       userId = req.user.id;
       console.log(userId)
       const user = await User.findById(userId).select("-password")
       console.log(user)
       res.send(user)
 
    } catch (error) {
       console.error(error.message)
       res.status(500).send("Some error occured")
    }
   })