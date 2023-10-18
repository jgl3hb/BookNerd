import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const dbName = process.env.MONGODB_DB;
const dbURI = 'mongodb://localhost:27017/booknerd'  

const db = mongoose.connection

mongoose.set('strictQuery', true)

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// database connection event
db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
