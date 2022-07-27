// bring in express
const express = require('express')
// instantiate router Router()
const router = express.Router()
const User = require('../models/user')

// setup HTTP routes//
router.get("/add", (req, res) => {
    res.render("add", {
        title: "Add"
    })
})
router.get("/list", (req, res) => {
    res.render("list", {
        title: "List"
    })
})
router.get("/thankyou", (req, res) => {
    res.render("thankyou", {
        title: "Thank You"
    })
})


router.post("/post/add", (req, res) => {
    const { firstname, lastname, gender, email, mobile, address, about } = req.body;
    //send data to db/
    const newUser = new User({
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        email: email,
        mobile: mobile,
        address: address,
        about: about
    })  
  
    newUser.save()
    .then((doc) => {
   
    }).catch((err) => {
       
    })

     res.redirect("/user/thankyou")
   //send data to db/

})

//export the router
module.exports = router