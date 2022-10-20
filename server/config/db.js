const mongoose = require('mongoose')

/**
 * Connects to a mongoDB database
 * provide a function to run when the connection is successful
 * @param {*} fn 
 */
const connectDB = fn => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(conn => {
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
      fn()
    })
    .catch(err => {
      console.log(err)
      process.exit(1)
    })
}

module.exports = connectDB
