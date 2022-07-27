// setup mongodb with mongoose
const mongoose = require('mongoose')

// setup mongodb server connections
const dburi = process.env.SVR_DB_URI
mongoose.connect(dburi, { useNewUrlParser: true })
const connection = mongoose.connection

module.exports = connection