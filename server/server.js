const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const app = express()
dotenv.config()
const PORT = process.env.PORT || 8000

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

connectDB(() => {
  app.listen(PORT, () =>
    console.log(
      `server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`
    )
  )
})
