import dotenv from 'dotenv'
import express from 'express'

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()
app.use(express.json())

app.use('/api/auth', authRoutes)


app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server started on port http://localhost:${PORT}`)
})
