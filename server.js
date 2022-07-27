const express = require('express')
const server = express()
require('dotenv').config()
const path = require('path')
const ejs = require('ejs')

ejs.delimiter = "?"

server.use(express.json())
server.use(express.urlencoded({
    extended: true
}))
//Template EJS setup
server.set("view engine", "ejs")


server.use(express.static(path.join(__dirname, "public")))

const user = require('./models/user')
server.get("/", (req, res) => {
    user.find({})
        .then((user) => {
            console.log(user)
            res.render("index", {
                title: "Welcome to school portal",
                user: user
            })
        })
        .catch((err) => {
            console.log(err)
            res.render("index", {
                title: "Welcome to school portal",
                user: []
            })
        })

    })

const userRouter = require('./routers/user')
server.use("/user", userRouter)

const dashboardRouter = require('./routers/dashboard')
server.use("/dashboard", dashboardRouter)

const dbCon = require('./modules/dbconnection')
dbCon.once('open', () => {
    console.log(`MongoDB is connected...`)
})

const port = process.env.SVR_PORT || 2000
server.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})

