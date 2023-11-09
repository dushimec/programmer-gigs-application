const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/gigs')
router.get('/', (req,res) => {
    Gig.findAll()
    .then(gigs => {
        res.render('gigs',{
            gigs
        })
    })
    .catch((err => console.log(err)))
})

module.exports = router;