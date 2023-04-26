const express = require('express')
const Plans = require('../models/Plans')
const router = express.Router()

router.get("/", async(req, res) => {
    const plans = await Plans.find({})
    
    res.redirect('/login')
})

router.get("/policy", async(req, res) => {
    res.render('layouts/policy')
})

module.exports = router