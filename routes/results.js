const express = require("express");
const router = express.Router();
const Results = require("../models/results/Results");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");

//Route 1 to Add a new note http://localhost:5000/results/addresults
router.post("/addresult", fetchUser, async (req, res) => {
   console.log(req.body.subject_type)
  try {
    const result = new Results({
      subject_name: req.body.subject_name,
      subject_type: req.body.subject_type,
      marks: req.body.marks,
      user: req.user.id,
    });
    const savedResult = await result.save();
    res.json(savedResult);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

// Route 2 to Fetch all the saved notes http://localhost:5000/results/getresults
router.get("/getresults", fetchUser, async (req, res) => {
  try {
    const savedResult = await Results.find({ user: req.user.id });
    res.json(savedResult);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
