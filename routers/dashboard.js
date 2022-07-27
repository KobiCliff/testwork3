// bring in express
const express = require('express')
// instantiate router Router()
const router = express.Router()





// setup HTTP routes//
router.get("/", (req, res) => {
    res.render("/profile")
})
router.get("/form", (req, res) => {
    res.render("/list")
})
router.get("/create", (req, res) => {
    res.render("/add")
})

//export the router
module.exports = router
