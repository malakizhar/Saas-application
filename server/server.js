import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'

const PORT =process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())

 await connectDB()

app.get('/',(req,res)=>{
res.send("API IS WORKING")
})

app.listen(PORT,()=>{
    console.log("server is running in PORT 4000")
})