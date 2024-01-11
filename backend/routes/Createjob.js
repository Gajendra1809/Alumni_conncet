const express = require('express')
const router = express.Router()
const Job=require('../models/Jobs')

router.post("/createjob",
  
  async (req, res) => {

    try {
      await Job.create({
        name: req.body.name,
        position: req.body.position,
        skills: req.body.skills,
        company: req.body.company,
        email:req.body.email
      })
      res.json({ success: true })
    } catch (error) {
      console.log(error)
      res.json({ success: false })
    }
  })

  router.post("/deletejob",
  
  async (req, res) => {

    try {
      await Job.deleteOne({
        position: req.body.position,  
        name:req.body.name    
      })
      res.json({ success: true })
    } catch (error) {
      console.log(error)
      res.json({ success: false })
    }
  })
  module.exports = router;